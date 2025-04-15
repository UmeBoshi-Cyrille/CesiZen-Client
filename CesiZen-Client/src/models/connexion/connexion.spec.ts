import { Connexion } from './connexion';

describe('Connexion', () => {
  it('should create an instance', () => {
    const connexion = new Connexion(
      'user@example.com',
      'UserPassword123'
    );
    expect(connexion).toBeTruthy();
  });
});
