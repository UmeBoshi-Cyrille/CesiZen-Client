import { Article } from './article';

describe('Article', () => {
  it('should create an instance', () => {
    const article = new Article(
      1,
      'Sample Title',
      'This is the content of the article.', 
      'John Doe',
      'This is the content of the article.'
    );
    expect(article).toBeTruthy();
  });
});
//describe('Article', () => { it('should create an instance', () => { expect(new Article()).toBeTruthy(); }); });
