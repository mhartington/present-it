import {
  Component,
  Prop,
  Watch,
  Element,
  Event,
  EventEmitter
} from '@stencil/core';
import { isLightColor, hexToRgb } from '../../util';
import { slideFade } from './transition/fade'
@Component({
  tag: 'present-slide',
  styleUrl: 'slide.scss'
})
export class Slide {
  @Prop() active: boolean = false;
  @Prop() animation = slideFade;
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

  componentDidLoad() {
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
  hostData() {
    return {
      class: {
        active: this.active
      }
    };
  }
  render() {
    return (
      <div class="slide-wrapper">
        <slot />
      </div>
    );
  }
}
