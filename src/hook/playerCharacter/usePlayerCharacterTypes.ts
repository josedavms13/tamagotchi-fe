export interface IUsePlayerCharacter {
   isAlive: boolean,
   fun: number,
   heart: number,
   hungry: number,
   age: number,
   name: string,
   color: PlayerColor
}

export enum PlayerColor {
   GREEN, RED, BLUE, YELLOW
}
