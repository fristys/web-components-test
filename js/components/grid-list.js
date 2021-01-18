import { attributeValue, makeTemplate, basicTemplate } from '../helpers.js';

export class GridList extends HTMLElement {
  get mobile() {
    return attributeValue(this, 'mobile', '1');
  }

  set mobile(value) {
    this.setAttribute('mobile', value);
    this.updateGridStyles();
  }

  get tablet() {
    return attributeValue(this, 'tablet', '1');
  }

  set tablet(value) {
    this.setAttribute('tablet', value);
    this.updateGridStyles();
  }

  get desktop() {
    return attributeValue(this, 'desktop', '1');
  }

  set desktop(value) {
    this.setAttribute('desktop', value);
    this.updateGridStyles();
  }

  get gap() {
    return attributeValue(this, 'gap', '0');
  }

  set gap(value) {
    this.setAttribute('gap', value);
    this.updateGridStyles();
  }

  _template = basicTemplate;

  constructor() {
    super();
    
    this.attachShadow({ mode: 'open' }).append(makeTemplate(this._template));

    this.updateGridStyles();
  }

  updateGridStyles() {
    const style = this.shadowRoot.querySelector('style');

    if (style) {
      style.innerHTML = `
        :host {
          display: grid;
          width: 100%;
          max-width: 100%;
          grid-template-columns: repeat(${this.mobile}, minmax(0,1fr));
          gap: ${this.gap};
        }

        @media screen and (min-width: 768px) {
          :host {
            grid-template-columns: repeat(${this.tablet}, minmax(0,1fr));
          }
        }

        @media screen and (min-width: 1024px) {
          :host {
            grid-template-columns: repeat(${this.desktop}, minmax(0,1fr));
          }
        }
      `;
    }
  }
}