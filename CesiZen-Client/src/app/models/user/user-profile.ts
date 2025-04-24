export class UserProfile {
  constructor(
    public firstname: string,
    public lastname: string,
    public username: string,
    public email: string,
    public createdAt: Date,
  ) {
  }
}
