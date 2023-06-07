export const socketEvents = {
   Connect: "connect",
   Disconnect: "disconnect",
   ConnectError: "connect_error",
} as const;

export const socketPlayerEvents = {
   Move: "move",
   Turn: "turn",
} as const;
