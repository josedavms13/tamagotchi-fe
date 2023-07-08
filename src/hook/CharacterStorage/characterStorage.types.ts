import {PlayerColor} from "../playerCharacter/usePlayerCharacterTypes.ts";

export interface ICharacterStorage {
   data: IUserRegister[]
}

export interface IUserRegister {
   userName: string,
   petName: string,
   petColor: PlayerColor,
   petFun: number,
   petAge: number,
   petHeart: number,
   petHungry: number,
   petIsAlive: boolean
}
