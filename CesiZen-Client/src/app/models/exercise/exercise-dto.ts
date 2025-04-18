export class ExerciseDto {
  constructor(
    public id: number,
    public title: string,
    public time: number,
    public exerciseType: number,
    public userId = 0,
  ) {

  }
}
