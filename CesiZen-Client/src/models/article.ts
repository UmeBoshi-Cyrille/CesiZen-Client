export class Article {
  
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public author: string,
    public content: string,
    public createdAt: Date = new Date(),
    public updatedAt: Date = new Date(),
    public imagePath: string,
    public categories: number = 0,
  ) {
  }
}
