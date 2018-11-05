import {PolymerElement, html} from '@polymer/polymer';
import 'char-lcd';

export class CharLcd extends PolymerElement {

  constructor() { super(); }

  static get template() { return html``; }

  connectedCallback() {
    super.connectedCallback();
    this.lcd = new window.CharLCD({ at: this.shadowRoot });
  }

  ready() { super.ready(); }

}

customElements.define('char-lcd', CharLcd);
