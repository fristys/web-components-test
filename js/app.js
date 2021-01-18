import './components/index.js';

import { ComponentView } from './components/component-view.js';

import { newsService } from './news.service.js';

(() => {
  const fetchDataAndBindToView = async () => {
    const componentView = document.getElementById('app');

    if (componentView && componentView instanceof ComponentView) {
      const data = await newsService.fetch();

      if (data && data.length) {
        const grid = document.createElement('grid-list');

        grid.mobile = '1';
        grid.tablet = '2';
        grid.desktop = '4';
        grid.gap = '2rem';

        let i = 0;
        const len = data.length;

        while (i < len) {
          const gridItem = document.createElement('grid-item');

          if (i === 4 || i === 13 || i === len - 1 || i === len - 2) {
            gridItem.cols = 2;
          }

          const newsArticle = document.createElement('news-article');

          newsArticle.article = data[i];
          gridItem.appendChild(newsArticle);
          grid.appendChild(gridItem);

          i++;
        }

        componentView.innerHTML = '';
        componentView.append(grid);
      }
    }
  };

  addEventListener('load', fetchDataAndBindToView);
})();
