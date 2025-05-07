import { Category } from './category';

describe('Category', () => {
  it('should create an instance', () => {
    const category = new Category(
      1,
      'Sample Category',
      '/Images/sample.jpg',
      'Sample Title',
    );
    expect(category).toBeTruthy();
  });
});
