import { ExerciseDto } from './article-dto';

describe('Exercise', () => {
  it('should create an instance', () => {
    const exercise = new ExerciseDto(
      1,
      'Sample Title',
      new Date(),
      57
    );
    expect(exercise).toBeTruthy();
  });
});
