import { Article } from "./article";

export interface ArticlesResponse {
  value: {
    data: Article[];
    pageNumber: number;
    pageSize: number;
    totalCount: number;
  };
}
