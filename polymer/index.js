import {PolymerElement, html} from '@polymer/polymer';
import 'char-lcd';

export class CharLcd extends PolymerElement {

  static get template() { return html``; }

  static get properties() {
    return {
      rows: {
        type: Number,
        value: 2,
//        notify: true
      },
      cols: {
        type: Number,
        value: 16,
//        notify: true
      }
    }
  }

  ready() {
    super.ready();
    this.lcd = new window.CharLCD({
      at: this.shadowRoot,
      rows: this.rows,
      cols: this.cols
    });
  }

  text(r, c, str) { this.lcd.text(r, c, str); }
  font(n, data) { this.lcd.font(n, data); }

}

customElements.define('char-lcd', CharLcd);
