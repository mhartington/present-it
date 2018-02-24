import { Component, Prop, Element } from '@stencil/core';
import highlight from 'highlight.js';
import { trimCode } from '../../util';
@Component({
  tag: 'reveal-code',
  styleUrl: 'code.scss',
  shadow: true
})
export class Code {
  @Prop() lang: string = '';
  @Element() el: HTMLElement;
  private codeEl: HTMLElement | undefined;

  codeChanged(code) {
    if (code) {
      let html: string;
      if (this.lang) {
        html = highlight.highlight(this.lang, code).value;
      } else {
        html = highlight.highlightAuto(code).value;
      }
      if (this.codeEl) {
        this.codeEl.innerHTML = html;
      }
    }
  }
  componentDidLoad() {

    const code = trimCode(this.el.textContent);
    this.codeChanged(code);
  }
  render() {
    return (
      <pre>
        <code class="hljs" ref={el => (this.codeEl = el)} />
      </pre>
    );
  }
}

