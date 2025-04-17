export class NewUser {
  constructor(
      public firstname: string,
      public lastname: string,
      public username: string,
      public email: string,
      public password: string,
      public confirmPassword: string,
  ) {
  }
}
