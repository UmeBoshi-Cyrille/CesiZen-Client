export class ExerciseDto {
  constructor(
    public id: number,
    public title: string,
    public exerciseType: number,
    public time: number,
  ) {}
}
