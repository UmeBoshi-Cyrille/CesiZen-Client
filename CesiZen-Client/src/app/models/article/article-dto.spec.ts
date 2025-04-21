import { ArticleDto } from './article-dto';

describe('ArticleDto', () => {
  it('should create an instance', () => {
    const article = new ArticleDto(
      1,
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
