import { Component, Element, Listen, State } from '@stencil/core';
@Component({
  tag: `reveal-deck`,
  styleUrl: 'deck.scss'
})
export class Deck {
  slides: Array<any> = [];
  buffer: number = 3;
  activeIndex = 0;
  matcher = /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/;

  @State() backgroundColor: string = 'transparent';
  @State() backgroundImage: string = 'none';

  @Element() deck: HTMLElement;

  componentWillLoad() {
    this.slides = Array.from(this.deck.querySelectorAll('reveal-slide'));
    this.handleSlides();
  }

  handleSlides() {
    this.slides.forEach((slide, index) => {
      slide.active = index === this.activeIndex;
    });
  }

  @Listen('slideDidChange')
  slideDidChangeHandler(event) {
    this.setBackgroundColor(event.detail.backgroundColor);
    this.setBackgroundImg(event.detail.backgroundImage);
  }

  @Listen('window:keyup.right')
  protected next() {
    if (this.activeIndex < this.slides.length - 1) {
      this.activeIndex++;
      this.handleSlides();
    } else {
      console.log('no more slides!');
    }
  }

  @Listen('window:keyup.left')
  protected prev() {
    if (this.activeIndex > 0) {
      this.activeIndex--;
      this.handleSlides();
    } else {
      console.log('cannot go back, already at 0');
    }
  }

  @Listen('window:keyup')
  protected fullScreen(e) {
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
  }

  protected setBackgroundColor(bg) {
    if (bg !== undefined) {
      this.backgroundColor = bg;
    } else {
      this.backgroundColor = 'transparent';
    }
  }

  protected setBackgroundImg(url) {
    if (url !== undefined) {
      this.backgroundImage = `url('${url}')`;
    } else {
      this.backgroundImage = 'none';
    }
  }

  render() {
    return [
      <div class="reveal-slides">
        <slot />
      </div>,
      <div
        class="reveal-background-color"
        style={{
          backgroundColor: this.backgroundColor
        }}
      />
    ];
  }
  // <div
  //   class="reveal-background-image"
  //   style={{
  //     backgroundImage: this.backgroundImage
  //   }}
  // />,
}
