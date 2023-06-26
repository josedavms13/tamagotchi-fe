export const SocketsEvents = {
   Connect: "connection",
   ConnectError: "connect_error",
   ConnectionError: "connectionError",
   Disconnect: "forceDisconnect",
   InternalMessage: "internalMessage",
   AddPlayer: "addPlayer",
   SuccessConnect: "successConnect",
   MinPlayersFulfilled: "minPlayersFulfilled",
} as const;

export const SocketResultCode = {
   maxPlayers: {name: "maxPlayers", code: 402},
   successConnect: {name: "successConnect", code: 200},
};
