export const TicTacEvents = {
   OutgoingMovement: "incomingMovement",
   IncomingMovement: "applyMovements",
   BadMove: "Move",
};

export type tEventPayload<T> = ((payload?: T) => void)
