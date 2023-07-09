import {PlayerColor} from "../playerCharacter/usePlayerCharacterTypes.ts";

export interface ICharacterStorage {
   data: IPetInfo[]
}

export interface IPetInfo {
   userName: string,
   petName: string,
   petColor: PlayerColor,
   petFun: number,
   petAge: number,
   petHeart: number,
   petHungry: number,
   petIsAlive: boolean
}
