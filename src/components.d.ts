/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */


declare global {
  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;
  }
}



import {
  Code as PresentCode
} from './components/code/code';

declare global {
  interface HTMLPresentCodeElement extends PresentCode, HTMLStencilElement {
  }
  var HTMLPresentCodeElement: {
    prototype: HTMLPresentCodeElement;
    new (): HTMLPresentCodeElement;
  };
  interface HTMLElementTagNameMap {
    "present-code": HTMLPresentCodeElement;
  }
  interface ElementTagNameMap {
    "present-code": HTMLPresentCodeElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "present-code": JSXElements.PresentCodeAttributes;
    }
  }
  namespace JSXElements {
    export interface PresentCodeAttributes extends HTMLAttributes {
      lang?: string;
    }
  }
}


import {
  Deck as PresentDeck
} from './components/deck/deck';

declare global {
  interface HTMLPresentDeckElement extends PresentDeck, HTMLStencilElement {
  }
  var HTMLPresentDeckElement: {
    prototype: HTMLPresentDeckElement;
    new (): HTMLPresentDeckElement;
  };
  interface HTMLElementTagNameMap {
    "present-deck": HTMLPresentDeckElement;
  }
  interface ElementTagNameMap {
    "present-deck": HTMLPresentDeckElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "present-deck": JSXElements.PresentDeckAttributes;
    }
  }
  namespace JSXElements {
    export interface PresentDeckAttributes extends HTMLAttributes {
      showCount?: any;
      showProgress?: any;
    }
  }
}


import {
  Markdown as PresentMd
} from './components/markdown/markdown';

declare global {
  interface HTMLPresentMdElement extends PresentMd, HTMLStencilElement {
  }
  var HTMLPresentMdElement: {
    prototype: HTMLPresentMdElement;
    new (): HTMLPresentMdElement;
  };
  interface HTMLElementTagNameMap {
    "present-md": HTMLPresentMdElement;
  }
  interface ElementTagNameMap {
    "present-md": HTMLPresentMdElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "present-md": JSXElements.PresentMdAttributes;
    }
  }
  namespace JSXElements {
    export interface PresentMdAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  Slide as PresentSlide
} from './components/slide/slide';

declare global {
  interface HTMLPresentSlideElement extends PresentSlide, HTMLStencilElement {
  }
  var HTMLPresentSlideElement: {
    prototype: HTMLPresentSlideElement;
    new (): HTMLPresentSlideElement;
  };
  interface HTMLElementTagNameMap {
    "present-slide": HTMLPresentSlideElement;
  }
  interface ElementTagNameMap {
    "present-slide": HTMLPresentSlideElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "present-slide": JSXElements.PresentSlideAttributes;
    }
  }
  namespace JSXElements {
    export interface PresentSlideAttributes extends HTMLAttributes {
      active?: boolean;
      backgroundColor?: string;
      backgroundImage?: string;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
