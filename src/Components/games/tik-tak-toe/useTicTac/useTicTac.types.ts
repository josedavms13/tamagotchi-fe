export interface IUseTicTac {
   petName: string,
   onWin: () => void,
   onLose: () => void,
   onEven: () => void,
}

export interface ITicTacPlayer {
   userName: string,
   cameCharacter: "X" | "O" | "IA",
   id: string,
}
