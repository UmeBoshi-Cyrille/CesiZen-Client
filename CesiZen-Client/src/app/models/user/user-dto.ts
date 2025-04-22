export class UserDto {
  constructor(
    public id: number,
    public firstname: string,
    public lastname: string,
    public username: string,
    public createdAt: Date,
    public updatedAt: Date,
    public isActive: boolean,
    public role: string,
  ) {
  }
}
