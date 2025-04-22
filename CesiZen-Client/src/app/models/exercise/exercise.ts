export class Exercise {
  constructor(
    public id: number,
    public title: string,
    public time: number,
    public editeAt: Date = new Date(),
    public exerciseType: number,
  ) {

  }
}
