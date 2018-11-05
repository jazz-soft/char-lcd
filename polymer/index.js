import {PolymerElement} from '@polymer/polymer/polymer-element.js';
import {html} from '@polymer/polymer/polymer-legacy.js';
import Lcd from "char-lcd";

console.log('CharLcd', window.CharLcd);

export class CharLcd extends PolymerElement {

  constructor() {
    super();
  }

  static get template() {
    return html``;
  }

  connectedCallback() {
    super.connectedCallback();
console.log('CharLcd - connectedCallback()', this.shadowRoot, Lcd);
this.shadowRoot.innerHTML = 'YES IT WORKS!';

//this lcd = new window.CharLcd({ at: this.shadowRoot });
  }

  ready() {
    super.ready();
console.log('CharLcd - ready()');
  }

}

customElements.define('char-lcd', CharLcd);
