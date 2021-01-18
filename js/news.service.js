class NewsService {
  url = `http://localhost:1337/proxy`;

  async fetch() {
    try {
      const res = await fetch(this.url);
      const json = await res.json();

      return json.articles || [];
    } catch (e) {
      console.warn(e);
      return [];
    }
  }
}

export const newsService = new NewsService();