import { Article } from './article';

describe('Article', () => {
  it('should create an instance', () => {
    const article = new Article(
      1,
      'Sample Title',
      'This is the content of the article.', 
      'John Doe',
      'This is the content of the article.',
      new Date('2023-10-01'),
      new Date('2023-10-01'),
      'path/to/image.jpg',
      'path/to/image.jpg',
      0
    );
    expect(article).toBeTruthy();
  });
});
