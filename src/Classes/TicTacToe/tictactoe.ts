import {Socket} from "socket.io-client";


export interface IIncomingTicTacToeMove {
   playerId: string,
   fieldId: number,
}

export type tIoEvent = (socket: Socket) => void

export interface IEmitTictacMove {
   fields: ITicTacFieldData[],
   nextTurn: Player,
   turnIndex: number,
}

export interface IEmitBadMovement {
   message: string;
}

export interface ITicTacFieldData {
   fieldData: tFieldData,
   index: number,
   isLocked: boolean,
}

export type tFieldData = "X" | "O" | "" | "I";

export interface Player {
   id: string,
   name: string,
   score: number,
}
