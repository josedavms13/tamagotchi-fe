export interface IEmmitEventCallback {
   onSuccess: (data?: any) => void,
   onError: (error?: any) => void,
}

export interface IOnConnectionQuery {
   playerName: string,
   roomName: string,
}
