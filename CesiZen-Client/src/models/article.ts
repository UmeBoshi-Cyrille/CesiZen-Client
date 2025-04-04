export class Article {
  
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public author: string,
    public content: string,
    public createdAt: Date,
    public updatedAt: Date,
    public imagePath: string,
    public categories: number,
  ) {
  }
}
