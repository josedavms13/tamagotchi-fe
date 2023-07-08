import {PlayerColor} from "../../hook/playerCharacter/usePlayerCharacterTypes.ts";

export interface IRegisterTypes {
   onUserRegister: (usernameSubmit:string, passwordSubmit:string, petNameSubmit:string, petColorSubmit:PlayerColor)=> void,
   onRegisterCancel: () => void
}

export interface IMessage {title: string, message: string}
