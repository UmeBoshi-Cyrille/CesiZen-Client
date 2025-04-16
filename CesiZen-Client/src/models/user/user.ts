import { LoginData } from "../connexion/login-data";
import { Exercise } from "../exercise/exercise";
import { Session } from "../session/session";

export class User {
  constructor(
    public id: number,
    public firstname: string,
    public lastname: string,
    public username: string,
    public createdAt: Date = new Date(),
    public lastLoginAt?: Date,
    public updatedAt?: Date,
    public isActive = true,
    public role = '',
    public login?: LoginData,
    public session?: Session,
    public breathExercises?: Exercise,
  ) {
  }
}
