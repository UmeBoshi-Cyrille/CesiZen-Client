import { UserDto } from './user-dto';

describe('UserDto', () => {
  it('should create an instance', () => {
    const user = new UserDto(
      1,
      'John',
      'Doe',
      'johndoe',
      new Date('2023-10-01'),
      new Date('2023-10-01'),
      true,
      'user',
    );
    expect(user).toBeTruthy();
  });
});
