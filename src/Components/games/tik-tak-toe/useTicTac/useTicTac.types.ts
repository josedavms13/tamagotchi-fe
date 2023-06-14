export interface IUseTicTac {
   userName: string,
}

export interface ITicTacPlayer {
   userName: string,
   cameCharacter: "X" | "O" | "IA",
   id: string,
}
