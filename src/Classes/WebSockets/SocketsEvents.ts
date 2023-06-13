export const SocketsEvents = {
   Connect: "connect",
   Disconnect: "forceDisconnect",
   InternalMessage: "internalMessage",
   SuccessConnect: "successConnect",
   MinPlayersFulfilled: "minPlayersFulfilled",
};

export const SocketResultCode = {
   maxPlayers: {name: "maxPlayers", code: 402},
   successConnect: {name: "successConnect", code: 200},
};
