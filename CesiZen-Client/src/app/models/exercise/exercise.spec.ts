import { Exercise } from './exercise';

describe('Exercise', () => {
  it('should create an instance', () => {
    const exercise = new Exercise(
      1,
      'Sample Title',
      5,
      new Date('2023-10-01'),
      5,
    );
    expect(exercise).toBeTruthy();
  });
});
