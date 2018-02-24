import { Component, Element, Listen, State } from '@stencil/core';
import createHistory from 'history/createBrowserHistory';
@Component({
  tag: `reveal-deck`,
  styleUrl: 'deck.scss'
})
export class Deck {
  slides: Array<any> = [];
  activeIndex = 0;
  history = createHistory();

  @State() backgroundColor: string = 'transparent';
  @Element() deck: HTMLElement;

  componentWillLoad() {
    this.slides = Array.from(this.deck.querySelectorAll('reveal-slide'));
    this.checkSlide(this.history.location);
    this.history.listen(location => {
      this.checkSlide(location);
    });
  }

  checkSlide(location) {
    const urlHash = parseInt(location.pathname.replace('/', ''), 10);
    if (isNaN(urlHash)) {
      this.history.push('/0');
      this.handleSlides();
    } else {
      this.activeIndex = urlHash;
      this.handleSlides();
    }
  }

  handleSlides() {
    this.slides.forEach((slide, index) => {
      slide.active = index === this.activeIndex;
    });
  }

  @Listen('slideDidChange')
  slideDidChangeHandler(event) {
    this.setBackgroundColor(event.detail.backgroundColor);
  }

  @Listen('window:keydown.right')
  protected next() {
    if (this.activeIndex < this.slides.length - 1) {
      this.activeIndex++;
      this.history.push(`/${this.activeIndex}`);
      this.handleSlides();
    }
  }

  @Listen('window:keydown.left')
  protected prev() {
    if (this.activeIndex > 0) {
      this.activeIndex--;
      this.history.push(`/${this.activeIndex}`);
      this.handleSlides();
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
}
