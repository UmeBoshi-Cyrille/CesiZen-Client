import { UserDataStorage } from "./user-data-storage";


describe('User', () => {
  it('should create an instance', () => {
    const user = new UserDataStorage(
      1,
      'johndoe',
      new Date('2023-10-01'),
      true,
      'User',
    );
    expect(user).toBeTruthy();
  });
});
