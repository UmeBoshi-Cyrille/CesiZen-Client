import { ArticlesResponse } from './articles-response';

const mockResponse: ArticlesResponse = {
  value: {
    data: [],
    pageNumber: 1,
    pageSize: 10,
    totalCount: 0,
  }
};

describe('ArticlesResponse', () => {
  it('should create an instance', () => {
    expect(mockResponse).toBeTruthy();
  });
});
