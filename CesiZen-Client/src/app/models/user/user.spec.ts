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
      true,
      'user', // role
      {
        id: 1,
        email: 'john.doe@example.com',
        emailVerified: true
      }
    );
    expect(user).toBeTruthy();
    expect(user.firstname).toBe('John');
    expect(user.login.email).toBe('john.doe@example.com');
  });
});
