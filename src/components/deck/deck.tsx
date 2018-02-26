import { Component, Element, Listen, Prop, State } from '@stencil/core';
import createHashHistory from 'history/createHashHistory';
@Component({
  tag: `present-deck`,
  styleUrl: 'deck.scss'
})
export class Deck {
  slides: Array<any> = [];
  @Prop() showCount;
  @Prop() showProgress;

  @State() activeIndex = 0;
  history = createHashHistory();

  @State() backgroundColor: string = 'transparent';
  @Element() deck: HTMLElement;

  componentWillLoad() {
    this.slides = Array.from(this.deck.querySelectorAll('present-slide'));
    this.checkSlide(this.history.location);
    this.history.listen(location => {
      this.checkSlide(location);
    });
  }

  checkSlide(location) {
    const urlHash = parseInt(location.pathname.replace('/', ''), 10);
    if (isNaN(urlHash) || urlHash > this.slides.length - 1) {
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
  protected next(event) {
    event.preventDefault();
    if (this.activeIndex < this.slides.length - 1) {
      this.activeIndex++;
      this.history.push(`${this.activeIndex}`);
      this.handleSlides();
    }
  }

  @Listen('window:keydown.left')
  protected prev(event) {
    event.preventDefault();
    if (this.activeIndex > 0) {
      this.activeIndex--;
      this.history.push(`${this.activeIndex}`);
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

  render() {
    const renderContent: Array<any> = [
      <div class="present-slides">
        <slot />
      </div>,
      <div
        class="present-background-color"
        style={{
          backgroundColor: this.backgroundColor
        }}
      />
    ];
    if (this.showProgress) {
      renderContent.push(
        <div class="present-progress" style={{transform: `translate3d(-${100 -this.activeIndex / (this.slides.length - 1) * 100}%, 0,0)`}}/>
      );
    }
    if (this.showCount) {
      renderContent.push(<div class="present-slide-count">{this.activeIndex + 1}/{this.slides.length}</div>);
    };
    return renderContent;
  }
}
