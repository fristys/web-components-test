import { makeTemplate } from '../helpers.js';

export class NewsArticle extends HTMLElement {
  _article = null;

  get article() {
    return this._article;
  }

  set article(value) {
    this._article = value;
    this.shadowRoot.innerHTML = '';
    this.shadowRoot.append(makeTemplate(this._template));
  }

  get _template() {
    if (!this.article) {
      return '';
    }

    const { url, title, urlToImage, description } = this.article;

    return `
      <style>
        :host {
          height: 100%;
          font-family: var(--wc-font-family);
        }

        article {
          height: 100%;
          background: var(--wc-gray);
        }

        a, a:visited {
          color: var(--wc-dark-gray);
          text-decoration: none;
          transition: opacity 0.25s ease-in-out;
        }

        @media (hover) {
          a:hover {
            opacity: 0.9;
          }
        }

        .thumbnail {
          position: relative;
          height: 0;
          padding-bottom: 100%;
        }

        img {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          display: block;
          transition: opacity 0.25s ease-in-out;
        }

        img:hover {
          opacity: 0.9;
        }

        h3, p {
          padding-left: 1.5rem;
          padding-right: 1.5rem;
        }
      </style>

      <article>
        <div class="thumbnail">
          <a href="${url}" target="_blank" rel="noreferrer"><img src="${urlToImage}" alt="${title}" /></a>
        </div>

        <h3><a href="${url}" target="_blank" rel="noreferrer">${title}</a></h3>

        <p>${description}</p>
      </article>
    `;
  }

  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
  }
}
