export interface IUsePlayTogether {

}

export interface IUsePlayTogetherErrorMessage {
   title: string,
   message?: string,
}

export const SocketsEvents = {
   Connect: "connection",
   ConnectionError: "connectionError",
   Disconnect: "forceDisconnect",
   InternalMessage: "internalMessage",
   AddPlayer: "addPlayer",
   SuccessConnect: "successConnect",
   CreateRoom: "createRoom",
   RoomCreated: "roomCreated",
   MinPlayersFulfilled: "minPlayersFulfilled",
   MaxPlayersFulfilled: "maxPlayersFulfilled",
} as const;

export interface IConnectionOpener {
   connectionType: ConnectionOpenerType,
   payload: string
}


export enum ConnectionOpenerType {
   CREATE_ROOM, JOIN_ROOM
}
