import { CategoryDto } from '../category/category-dto';
import { ArticleDto } from './article-dto';

const categories: CategoryDto[] = [
  { id: 1, name: 'Tech', imagePath: 'tech.png', alternative: '' },
  { id: 2, name: 'Design', imagePath: 'design.png', alternative: '' }
];

describe('ArticleDto', () => {
  it('should create an instance', () => {
    const article = new ArticleDto(
      1,
      'title',
      'description',
      'author',
      new Date(),
      'content',
      categories,
    );
    expect(article).toBeTruthy();
  });
});
