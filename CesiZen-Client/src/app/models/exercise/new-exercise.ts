export class NewExercise {
  constructor(
    public title: string,
    public time: number,
    public editeAt: Date = new Date(),
    public exerciseType: number
  ) {}
}
