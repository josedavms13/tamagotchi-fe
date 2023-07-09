import {IUseTicTac} from "./useTicTac/useTicTac.types.ts";

export interface ITicTacToe extends IUseTicTac{
   onCancel: () => void,
}


export interface ITicTacFieldData {
   fieldData: tFieldData,
   index: number,
   isLocked: boolean,
}



export type tFieldData = "X" | "O" | "IA" | "";
