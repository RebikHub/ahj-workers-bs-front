export default class Server {
  constructor() {
    this.url = 'https://ahj-sw-news-back.herokuapp.com/news';
  }

  async loadNews() {
    try {
      const news = await fetch(this.url);
      return news.json();
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
