import { Component, Element, Listen, Prop, State } from '@stencil/core';
import Store from '../../store';
@Component({
  tag: `present-deck`,
  styleUrl: 'deck.scss'
})
export class Deck {
  slides: Array<any> = [];
  @Prop() showCount;
  @Prop() showProgress;

  @State() store: Store;

  @State() backgroundColor: string = 'transparent';
  @State() backgroundImage: string = 'none';
  @Element() deck: HTMLElement;

  componentWillLoad() {
    this.slides = Array.from(this.deck.querySelectorAll('present-slide'));
    this.store = new Store({ activeIndex: 0, slideLength: this.slides.length });
    this.handleSlides();
  }

  handleSlides() {
    this.slides.forEach((slide, index) => {
      slide.active = index === this.store.state.activeIndex;
    });
  }

  @Listen('slideDidChange')
  slideDidChangeHandler(event) {
    this.setBackgroundColor(event.detail.backgroundColor);
    this.setBackgroundImage(event.detail.backgroundImage);
  }

  @Listen('window:keydown.right')
  protected next(event) {
    event.preventDefault();
    const state = this.store.state;
    if (state.activeIndex < this.slides.length - 1) {
      const payload = { ...state, activeIndex: state.activeIndex += 1 };
      this.store.set('NEXT', payload);
      this.handleSlides();
    }
  }

  @Listen('window:keydown.left')
  protected prev(event) {
    event.preventDefault();
    const state = this.store.state;
    if (state.activeIndex > 0) {
      const payload = { ...state, activeIndex: state.activeIndex -= 1 };
      this.store.set('PREV', payload);
      this.handleSlides();
    }
  }

  @Listen('window:keyup')
  protected fullScreen(e) {
    e.preventDefault();
    if (e.code === 'KeyF') {
      let element = document.documentElement;

      // Check which implementation is available
      let requestMethod =
        element.requestFullscreen ||
        element.webkitRequestFullscreen ||
        element.webkitRequestFullScreen;

      if (requestMethod) {
        requestMethod.apply(element);
      }
    }

    if (e.code === 'KeyO') {
      this.deck.classList.toggle('pause');
    }
  }

  protected setBackgroundColor(bg) {
    if (bg !== undefined) {
      this.backgroundColor = bg;
    } else {
      this.backgroundColor = 'transparent';
    }
  }

  protected setBackgroundImage(img) {
    if (img !== undefined) {
      this.backgroundImage = `url("${img}")`;
    } else {
      this.backgroundImage = 'none';
    }
  }

  render() {
    const renderContent: Array<any> = [
      <div class="present-slides">
        <slot />
      </div>,
      <div
        class="present-background-color"
        style={{
          background: this.backgroundColor
        }}
      />,

      <div
        class="present-background-image"
        style={{
          backgroundImage: this.backgroundImage
        }}
      />
    ];
    return renderContent;
  }
}
