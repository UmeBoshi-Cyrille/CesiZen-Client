import { LoginData } from "./login-data";


describe('Connexion', () => {
  it('should create an instance', () => {
    const connexion = new LoginData(
      'user@example.com',
      'UserPassword123'
    );
    expect(connexion).toBeTruthy();
  });
});
