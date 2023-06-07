import {io, Socket} from "socket.io-client";
import {IEmmitEventCallback} from "./Sockets.types.ts";
import {socketEvents, socketPlayerEvents} from "./SocketEvents.ts";

export class WebSockets {
   private socket: Socket | null = null;
   private readonly _port: number;
   private readonly _host: string;

   constructor(host: string, port: number) {
      this._port = port;
      this._host = host;
   }

   public connect({onError}: IEmmitEventCallback): void {
      console.log(socketEvents.Connect);
      this.socket = io(`${ this._host }:${ this._port }`);
      this.socket.on(socketEvents.ConnectError, (error) => {
         onError(error);
      });
   }

   public move(): void {
      console.log(socketPlayerEvents.Move);
      if (this.socket) {
         this.socket.emit(socketPlayerEvents.Move, (data) => {
            console.log(data);
         });
      } else {
         console.log("Socket is null");
      }
   }
}
