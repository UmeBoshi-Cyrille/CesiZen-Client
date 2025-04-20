import { UserData } from "./user-data";

describe('User', () => {
  it('should create an an object matching interface', () => {
    const user: UserData = {
      id: 1,
      username: 'johndoe',
      createdAt: new Date('2023-10-01').toString(),
      isActive: true,
      role: 'User',
    };
    expect(user).toBeTruthy();
    expect(user.id).toBe(1);
    expect(user.username).toBe('johndoe');
  });
});
