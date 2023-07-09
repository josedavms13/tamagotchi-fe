import {PlayerColor} from "../../hook/playerCharacter/usePlayerCharacterTypes.ts";

export  type tScreen = "playForm" |
   "feed" |
   "game" |
   "playTogether" |
   "ticTacToe"
;

export interface IScreen {
   petFun:number,
   petAge:number,
   petHeart:number,
   petHungry:number,
   petName:string,
   petColor: PlayerColor,
   petIsAlive:boolean
}
