import {IUser} from "../../hook/Login/login.types.ts";
import {IPetInfo} from "../../hook/CharacterStorage/characterStorage.types.ts";

export type tHome =
   "Login" |
   "Register" |
   "Home"

export interface IHome {
   onLoginSubmit: (userName: string, password: string) => void;
   onRegisterButtonClick: (user: IUser, pet: IPetInfo) => void;
}
