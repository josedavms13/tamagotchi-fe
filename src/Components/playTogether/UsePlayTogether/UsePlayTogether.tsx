import {useEffect, useState} from "react";
import {createSocketServer} from "../../../services/socketServices.ts";
import {io, Socket} from "socket.io-client";
import {getBaseUrl} from "../../../services/baseServices.ts";
import {
   ConnectionOpenerType,
   IConnectionOpener,
   IUsePlayTogetherErrorMessage,
   SocketsEvents
} from "./usePlayTogether.types.ts";

export const usePlayTogether = () => {

   const [socket, setSocket] = useState<null | Socket>(null);
   const [port, setPort] = useState<null | number>(null);
   const [errorMessage, setErrorMessage] = useState<null | IUsePlayTogetherErrorMessage>(null);


   function showError(message: IUsePlayTogetherErrorMessage, time?: number) {
      setErrorMessage(message);
      setTimeout(() => {
         setErrorMessage(null);
      }, time ? time : 2000);
   }

   function createServer() {
      createSocketServer()
         .then((data) => {
            setPort(data.data.port);
         });
   }

   // Socket event injection
   useEffect(() => {
      console.log(socket);
      socket?.on(SocketsEvents.SuccessConnect, (data) => {
         console.log(data);
      });
      socket?.on(SocketsEvents.RoomCreated, (data) => {
         console.log(data);
      });
   }, [socket]);


   // eslint-disable-next-line react-hooks/exhaustive-deps
   function connect() {
      if (port) {
         setSocket(io(getBaseUrl(true, port)));
      } else {
         showError({
            title: "No server available",
            message: "Initialize server first"
         });
      }
   }

   function createRoom(roomName: string) {
      console.log("Creating room");
      const query: IConnectionOpener = {
         connectionType: ConnectionOpenerType.CREATE_ROOM,
         payload: roomName
      };
      socket!.emit(SocketsEvents.CreateRoom, query);
   }

   useEffect(() => {
      console.log(port);
   }, [port]);

   return {
      createServer,
      errorMessage,
      connect,
      createRoom
   };
};
