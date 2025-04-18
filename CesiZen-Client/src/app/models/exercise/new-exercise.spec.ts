import { NewExercise } from "./new-exercise";


describe('Exercise', () => {
  it('should create an instance', () => {
    const exercise = new NewExercise(
      'Sample Title',
      5,
      new Date('2023-10-01'),
      1,
    );
    expect(exercise).toBeTruthy();
  });
});
