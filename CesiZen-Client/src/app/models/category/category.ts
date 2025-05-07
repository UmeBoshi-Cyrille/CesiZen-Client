export class Category {
  constructor(
    public id: number,
    public name: string,
    public imagePath: string,
    public alternative: string,
    public imageSrc?: string
  ) {
  }
}
