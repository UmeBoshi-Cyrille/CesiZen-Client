import { UserDataStorage } from "../user/user-data-storage";

export class AuthenticationResponse {

  constructor(
    public user: UserDataStorage | null,
    public isLoggedIn: boolean,
    public tokenExpirationTime: number)
  { }
}
