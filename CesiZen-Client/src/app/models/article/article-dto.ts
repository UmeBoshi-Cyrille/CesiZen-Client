export class ArticleDto {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public author: string,
    public createdAt: Date = new Date(),
    public imagePath: string,
    public imageSrc?: string,
    public categories = 0,
  ) {
  }
}
