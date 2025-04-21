/* eslint-disable @typescript-eslint/no-explicit-any */
export class PaginationData {
  constructor(public data: any[],
    public pageNumber: number,
    public pageSize: number,
    public pageCount: number,
  ) {}
}
