export class UserDataStorage {
  constructor(
    public id: number,
    public username: string,
    public createdAt: Date | string,
    public isActive: boolean,
    public role: string,
  ) {
  }
}
