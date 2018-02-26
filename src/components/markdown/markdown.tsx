import { Component, Element } from '@stencil/core';
import snarkdown from 'snarkdown';
import { trimCode } from '../../util';
@Component({
  tag: 'present-md',
  styleUrl: 'markdown.scss',
  shadow: true
})
export class Markdown {
  @Element() el: HTMLElement;
  private container;

  componentDidLoad() {
    const md = trimCode(this.el.textContent);
    this.container.innerHTML = snarkdown(md);
  }
  render() {
    return <div ref={el => (this.container = el)} />;
  }
}
