// custom-paginator-intl.ts
import { MatPaginatorIntl } from '@angular/material/paginator';
import { Injectable } from '@angular/core';

@Injectable()
export class PaginatorCustomService extends MatPaginatorIntl {
  override itemsPerPageLabel = 'Articles par page: ';
  override nextPageLabel = 'Next';
  override previousPageLabel = 'Previous';
  override firstPageLabel = 'First';
  override lastPageLabel = 'Last';
}
