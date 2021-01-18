import { makeTemplate, basicTemplate } from '../helpers.js';

export class ComponentView extends HTMLElement {
  set customVariables(variablesObj) {
    const style = this.shadowRoot.querySelector('style');

    if (style) {
      style.innerHTML = `
        :host {
          ${Object.entries(variablesObj).reduce(
            (str, [key, value]) => str + `${key}: ${value};`,
            ''
          )}
          max-width: 100%;
          width: 100%;
          min-width: 0;
          font-family: var(--wc-font-family);
          font-size: var(--wc-font-base-size);
        }
      `;
    }
  }

  _template = basicTemplate;

  constructor() {
    super();

    this.attachShadow({ mode: 'open' }).append(makeTemplate(this._template));

    this.customVariables = {
      '--wc-font-base-size': '16px',
      '--wc-font-family':
        'system, -apple-system, ".SFNSText-Regular", "San Francisco", "Roboto", "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif',
      '--wc-gray': '#e9e9e9',
      '--wc-dark-gray': '#333',
    };
  }
}
