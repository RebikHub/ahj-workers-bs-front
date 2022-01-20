export default class Server {
  constructor() {
    this.url = 'http://localhost:3333/news';
  }

  async loadNews() {
    try {
      const news = await fetch(this.url);
      console.log(news);
      return news.json();
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
