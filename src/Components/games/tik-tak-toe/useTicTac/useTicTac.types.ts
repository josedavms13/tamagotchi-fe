import {ITicTacToe} from "../tikTakToeTypes.ts";

export interface IUseTicTac extends ITicTacToe {
   userName: string,
}

export interface ITicTacPlayer {
   userName: string,
   cameCharacter: "X" | "O" | "IA",
   id: string,
}
