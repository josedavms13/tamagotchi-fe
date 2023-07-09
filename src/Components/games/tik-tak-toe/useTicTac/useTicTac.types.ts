export interface IUseTicTac {
   userName: string,
   onWin: () => void,
   onLose: () => void,
}

export interface ITicTacPlayer {
   userName: string,
   cameCharacter: "X" | "O" | "IA",
   id: string,
}
