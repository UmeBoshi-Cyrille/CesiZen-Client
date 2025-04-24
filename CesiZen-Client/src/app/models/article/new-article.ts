import { NewImage } from "../image/new-image";

export class NewArticle {
  constructor(
    public title: string,
    public description: string,
    public author: string,
    public content: string,
    public createdAt: Date = new Date(),
    public updatedAt: Date = new Date(),
    public imagePath: string,
    public imageSrc?: string,
    public images?: NewImage[],
    public categories?: number[],
  ) {
  }
}
