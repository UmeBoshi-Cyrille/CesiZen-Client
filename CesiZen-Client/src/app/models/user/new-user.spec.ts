import { NewUser } from "./new-user";


describe('User', () => {
  it('should create an instance', () => {
    const user = new NewUser(
        'John',
        'Doe',
        'johndoe',
        'example@gmail.com',
        'passwordAmin123*',
        'passwordAmin123*'
    );
    expect(user).toBeTruthy();
  });
});
