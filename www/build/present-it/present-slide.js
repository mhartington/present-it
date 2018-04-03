/*! Built with http://stenciljs.com */
const { h } = window.PresentIt;

import { isLightColor, hexToRgb } from './chunk2.js';

function fadeTransition(el, direction) {
    let animationBuilder;
    const easeTiming = {
        // duration: 0,
        duration: 300,
        easing: 'cubic-bezier(0.26, 0.86, 0.44, 0.985)'
    };
    if (direction === 'enter') {
        animationBuilder = new KeyframeEffect(el, [{ opacity: 0 }, { opacity: 1 }], easeTiming);
    }
    if (direction === 'leave') {
        animationBuilder = new KeyframeEffect(el, [{ opacity: 1 }, { opacity: 0 }], easeTiming);
    }
    return new Animation(animationBuilder, document.timeline);
}

class Slide {
    constructor() {
        this.fragments = [];
        this.activeIndex = 0;
        this.active = false;
        this.animation = fadeTransition;
    }
    onPropsDidChange() {
        this.slideDidChange.emit({
            backgroundColor: this.backgroundColor,
            backgroundImage: this.backgroundImage
        });
    }
    watchHandler() {
        let animation = this.animation;
        if (this.active === true) {
            animation(this.el, 'enter').play();
            this.slideDidChange.emit({
                backgroundColor: this.backgroundColor,
                backgroundImage: this.backgroundImage
            });
        }
        if (this.active === false) {
            animation(this.el, 'leave').play();
        }
    }
    nextFragment(activeIndex) {
        this.fragments[this.activeIndex].active = true;
        this.activeIndex = activeIndex;
        this.updateQuery();
    }
    prevFragment(activeIndex) {
        this.fragments[activeIndex].active = false;
        this.activeIndex = activeIndex;
        this.updateQuery();
    }
    updateQuery() {
        console.log(this.activeIndex);
    }
    onNext(e) {
        e.preventDefault();
        if (this.active &&
            this.fragments.length > 0 &&
            !(this.activeIndex === this.fragments.length)) {
            e.cancelBubble = true;
            this.nextFragment(this.activeIndex + 1);
        }
    }
    onPrev(e) {
        e.preventDefault();
        if (this.active && this.fragments.length > 0 && !(this.activeIndex === 0)) {
            e.cancelBubble = true;
            this.prevFragment(this.activeIndex - 1);
        }
    }
    componentWillLoad() {
        this.fragments = Array.from(this.el.querySelectorAll('present-fragment'));
        this.checkContrast();
        if (this.active === true) {
            this.slideDidChange.emit({
                backgroundColor: this.backgroundColor,
                backgroundImage: this.backgroundImage
            });
        }
    }
    checkContrast() {
        let color;
        if (this.backgroundColor) {
            if (this.backgroundColor.startsWith('#')) {
                let hexConverted = this.backgroundColor.replace('#', '');
                color = hexToRgb(hexConverted);
            }
            if (this.backgroundColor.startsWith('rgb')) {
                color = this.backgroundColor.replace(/[^\d,]/g, '').split(',');
            }
            if (color && isLightColor(color)) {
                this.el.classList.add('has-light-background');
            }
        }
    }
    render() {
        return (h("div", { class: "slide-wrapper" },
            h("slot", null)));
    }
    static get is() { return "present-slide"; }
    static get properties() { return { "active": { "type": Boolean, "attr": "active", "reflectToAttr": true, "watchCallbacks": ["watchHandler"] }, "animation": { "type": "Any", "attr": "animation" }, "backgroundColor": { "type": String, "attr": "background-color", "watchCallbacks": ["onPropsDidChange"] }, "backgroundImage": { "type": String, "attr": "background-image", "watchCallbacks": ["onPropsDidChange"] }, "el": { "elementRef": true } }; }
    static get events() { return [{ "name": "slideDidChange", "method": "slideDidChange", "bubbles": true, "cancelable": true, "composed": true }]; }
    static get style() { return "present-slide {\n  bottom: 0;\n  left: 0;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 100%;\n  pointer-events: none;\n  z-index: 2; }\n  present-slide.has-light-background {\n    color: #222; }\n  present-slide[active=true],\n  present-slide[active=true] > * {\n    pointer-events: initial;\n    opacity: 1; }\n  present-slide .slide-wrapper {\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n    -ms-flex-align: center;\n    align-items: center;\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    height: 100%;\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    text-align: center;\n    margin: auto;\n    width: 80%; }"; }
}

export { Slide as PresentSlide };
