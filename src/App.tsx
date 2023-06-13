/* eslint-disable @typescript-eslint/no-explicit-any */
import {useEffect, useState} from "react";
import {io} from "socket.io-client";
import {SocketsEvents} from "./Classes/WebSockets/SocketsEvents.ts";


const socketUrl = "http://localhost:4545";

function App() {

   const [socket, setSocket] = useState<any>();
   const [socketConnected, setSocketConnected] = useState(false);

   useEffect(() => {
      if (socket) {
         socket.on(SocketsEvents.SuccessConnect, (data) => {
            console.log(data);
            setSocketConnected(true);
         });
         socket.on(SocketsEvents.InternalMessage, (data) => {
            console.log(data);
         });
         console.log(socket);
      }
   }, [socket]);

   function connect() {
      setSocket(io(socketUrl));
   }

   return (
      <>
         <button onClick={ connect }>connect</button>
         <button onClick={ () => {
            socket.disconnect();
            setSocket(null);
         } }>disconnect
         </button>
         <div>
            { socketConnected ? "Connected" : "not connected" }
         </div>

      </>
   );
}

export default App;
