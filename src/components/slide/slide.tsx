import {
  Component,
  Prop,
  Watch,
  Element,
  Event,
  EventEmitter,
  Listen
} from '@stencil/core';
import { isLightColor, hexToRgb } from '../../util';
import { fadeTransition } from './transition/fade';
@Component({
  tag: 'present-slide',
  styleUrl: 'slide.scss'
})
export class Slide {
  fragments: Array<HTMLPresentFragmentElement> = [];
  activeIndex = 0;

  @Prop()
  active = false;

  @Prop() animation = fadeTransition;
  @Prop() backgroundColor: string;
  @Prop() backgroundImage: string;
  @Event() slideDidChange: EventEmitter;
  @Element() el: HTMLElement;

  @Watch('backgroundColor')
  @Watch('backgroundImage')
  onPropsDidChange() {
    this.slideDidChange.emit({
      backgroundColor: this.backgroundColor,
      backgroundImage: this.backgroundImage
    });
  }

  @Watch('active')
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

  hostData(){
    return {
      class: {
        'active': this.active
      }
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

  @Listen('window:keydown.right', { capture: true })
  onNext(e: Event) {
    e.preventDefault();
    if (
      this.active &&
      this.fragments.length > 0 &&
      !(this.activeIndex === this.fragments.length)
    ) {
      e.cancelBubble = true;
      this.nextFragment(this.activeIndex + 1);
    }
  }

  @Listen('window:keydown.left', { capture: true })
  onPrev(e: Event) {
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
    let color: any;
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
    return (
      <div class="slide-wrapper">
        <slot />
      </div>
    );
  }
}
