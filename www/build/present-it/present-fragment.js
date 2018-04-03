/*! Built with http://stenciljs.com */
const { h } = window.PresentIt;

class Fragment {
    constructor() {
        this.active = false;
    }
    static get is() { return "present-fragment"; }
    static get properties() { return { "active": { "type": Boolean, "attr": "active", "reflectToAttr": true } }; }
    static get style() { return "present-fragment * {\n  opacity: 0;\n  -webkit-transition: var(--base-animation-duration) opacity var(--base-animation-easing);\n  transition: var(--base-animation-duration) opacity var(--base-animation-easing); }\n\npresent-fragment[active='true'] * {\n  opacity: 1; }"; }
}

export { Fragment as PresentFragment };
