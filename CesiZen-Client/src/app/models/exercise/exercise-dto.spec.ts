import { ExerciseDto } from './exercise-dto';

describe('Exercise', () => {
  it('should create an instance', () => {
    const exercise = new ExerciseDto(
      1,
      'Sample Title',
      57,
      60,
    );
    expect(exercise).toBeTruthy();
  });
});
