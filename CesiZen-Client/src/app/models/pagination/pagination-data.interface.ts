export interface PaginationData<T> {
  data: T[],
  pageNumber: number;
  pageSize: number;
  totalCount: number;
}
