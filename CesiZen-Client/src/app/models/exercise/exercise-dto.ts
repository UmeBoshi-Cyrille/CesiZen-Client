export class ExerciseDto {
  constructor(
    public id: number,
    public title: string,
    public editedAt: Date,
    public exerciseType: number,
  ) {}
}
