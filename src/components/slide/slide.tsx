import {
  Component,
  Prop,
  Watch,
  Element,
  Event,
  EventEmitter
} from '@stencil/core';
import { isLightColor, hexToRgb } from '../../util';
@Component({
  tag: 'present-slide',
  styleUrl: 'slide.scss'
})
export class Slide {
  @Prop() active: boolean = false;
  @Prop() backgroundColor: string;
  @Prop() backgroundImage: string;
  @Event() slideDidChange: EventEmitter;
  @Element() el: HTMLElement;

  @Watch('active')
  watchHandler() {
    if (this.active === true) {
      this.el.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 300,
        easing: 'cubic-bezier(0.26, 0.86, 0.44, 0.985)'
      });
      this.slideDidChange.emit({
        backgroundColor: this.backgroundColor,
        backgroundImage: this.backgroundImage
      });
    }
    if (this.active === false) {
      this.el.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 300,
        easing: 'cubic-bezier(0.26, 0.86, 0.44, 0.985)'
      });
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
      if (this.backgroundColor.includes('#')) {
        let hexConverted = this.backgroundColor.replace('#', '');
        color = hexToRgb(hexConverted);
      }
      if (this.backgroundColor.includes('rgb')) {
        color = this.backgroundColor.replace(/[^\d,]/g, '').split(',');
      }
      if (isLightColor(color)) {
        console.log('isDarker')
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
