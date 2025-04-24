import { UserProfile } from "./user-profile";

describe('User Profile', () => {
  it('should create an instance', () => {
    const user = new UserProfile(
      'John',
      'Doe',
      'johndoe',
      'email@gmail.com',
      new Date('2023-10-01')
    );
    expect(user).toBeTruthy();
  });
});
