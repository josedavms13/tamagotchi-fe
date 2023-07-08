import {PlayerColor} from "../../hook/playerCharacter/usePlayerCharacterTypes.ts";

export type tHome =
   "Login" |
   "Register" |
   "Home"

export interface IHome {
   onLoginSubmit: (userName: string, password: string) => void;
   onRegisterButtonClick: (userName: string, password: string, dinosaurColor: PlayerColor, petName: string) => void;
}
