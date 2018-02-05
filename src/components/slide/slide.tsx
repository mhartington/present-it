import { Component, Prop, Watch, Element, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'reveal-slide',
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
      this.el.animate([{opacity: 0}, {opacity: 1}], {duration: 300, easing: 'ease-in'})
      this.slideDidChange.emit({
        backgroundColor: this.backgroundColor,
        backgroundImage: this.backgroundImage
      });
    }
  }

  render() {
    if (this.active) {
      return (
        <div>
          <slot />
        </div>
      )
    } else {
      return null
    }
  }
}
