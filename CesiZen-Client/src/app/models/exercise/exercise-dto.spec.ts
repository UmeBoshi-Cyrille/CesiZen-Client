import { ExerciseDto } from './exercise-dto';

describe('Exercise', () => {
  it('should create an instance', () => {
    const exercise = new ExerciseDto(
      1,
      'Sample Title',
      5,
      57
    );
    expect(exercise).toBeTruthy();
  });
});
