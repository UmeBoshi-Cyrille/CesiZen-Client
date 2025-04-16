import { User } from './user';

describe('User', () => {
  it('should create an instance', () => {
    const user = new User(
      1,
      'John',
      'Doe',
      'johndoe',
      new Date('2023-10-01'),
      new Date('2023-10-01'),
      new Date('2023-10-01'),
      true,
      'user',
      undefined,
      undefined,
      undefined,
    );
    expect(user).toBeTruthy();
  });
});
