class News {
  constructor( headline, articleUrl, thumbnailUrl, body) {
    this.headline = headline;
    this.articleUrl = articleUrl;
    this.thumbnailUrl = thumbnailUrl;
    this.body = body;
    this.summary = body;
  }

  addSummary(summary) {
    concosle.log("summary", summary)
    this.summary = summary;
  }
}
