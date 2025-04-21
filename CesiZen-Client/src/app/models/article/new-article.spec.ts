import { NewArticle } from "./new-article";


describe('Article', () => {
  it('should create an instance', () => {
    const article = new NewArticle(
      'title',
      'description',
      'author',
      'content',
      new Date(),
      new Date(),
      'image.png',
    );
    expect(article).toBeTruthy();
  });
});
