import { Component, Prop } from "@stencil/core";
@Component({
  tag: 'present-fragment',
  styleUrl: './fragment.scss'
})
export class Fragment {

  @Prop({reflectToAttr: true}) active = false;
}

