import { Session } from './session';

describe('Session', () => {
  it('should create an instance', () => {
    const session = new Session(
      1,
      'session-123',
      5,
    );
    expect(session).toBeTruthy();
  });
});
