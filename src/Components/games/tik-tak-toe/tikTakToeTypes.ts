
export interface ITicTacToe {
   onWin: () => void,
   onLose: () => void,
   onCancel: () => void,
}


export interface ITicTacFieldData {
   fieldData: tFieldData,
   index: number,
   isLocked: boolean,
}



export type tFieldData = "X" | "O" | "IA" | "";
