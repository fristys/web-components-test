import { attributeValue, makeTemplate, basicTemplate } from '../helpers.js';

export class GridItem extends HTMLElement {
  get rows() {
    return attributeValue(this, 'rows', 'auto');
  }

  set rows(value) {
    this.setAttribute('rows', value);
    this.updateStyles();
  }

  get cols() {
    return attributeValue(this, 'cols', '1');
  }

  set cols(value) {
    this.setAttribute('cols', value);
    this.updateStyles();
  }

  _template = basicTemplate;

  constructor() {
    super();
    
    this.attachShadow({ mode: 'open' }).append(makeTemplate(this._template));

    this.updateStyles();
  }

  updateStyles() {
    const style = this.shadowRoot.querySelector('style');

    if (style) {
      style.innerHTML = `
        :host {
          display: flex;
          flex-flow: column nowrap;
          align-items: stretch;
          height: 100%;
          grid-row: auto/span ${this.rows};
          grid-column: auto/span ${this.cols};
        }
      `;
    }
  }
}