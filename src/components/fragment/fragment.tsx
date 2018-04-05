import { Component, Prop } from '@stencil/core';
@Component({
  tag: 'present-fragment',
  styleUrl: './fragment.scss'
})
export class Fragment {
  @Prop() active = false;
  hostData() {
    return {
      class: {
        active: this.active
      }
    };
  }
}
