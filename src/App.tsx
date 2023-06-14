/* eslint-disable @typescript-eslint/no-explicit-any */
import {useEffect, useState} from "react";
import {io} from "socket.io-client";
import {SocketsEvents} from "./Classes/WebSockets/SocketsEvents.ts";
import {TicTacEvents} from "./Classes/TicTacToe/TicTacToeEvents.ts";


const socketUrl = "http://localhost:4545";

function App() {

   const [socket, setSocket] = useState<any>(null);
   const [socketConnected, setSocketConnected] = useState(false);

   const [playerName, setPlayerName] = useState("");
   const [areMinPlayerRequired, setAreMinPlayerRequired] = useState(false);

   useEffect(() => {
      if (socket) {
         socket.on(SocketsEvents.SuccessConnect, (data) => {
            console.log(data);
            setSocketConnected(true);
         });
         socket.on(SocketsEvents.InternalMessage, (data) => {
            console.log(data);
         });
         socket.on(SocketsEvents.ConnectionError, (data) => {
            console.log(data);
         });

         console.log(socket);
      }
   }, [playerName, socket]);

   function connect() {
      if (playerName.length > 0) {
         setSocket(io(socketUrl, {
            query: {
               playerName,
            },
         }));
      } else {
         alert("Please enter your name");
      }
   }

   const [fieldNumber, setFieldNumber,] = useState(0);

   function makeMove() {
      if (socket) {
         socket.emit(TicTacEvents.OutgoingMovement, fieldNumber);
      }
   }


   return (
      <>
         <input type="text" onChange={ (e) => setPlayerName(e.target.value) }/>
         <button onClick={ connect }>connect</button>
         <button onClick={ () => {
            socket.disconnect();
            setSocket(null);
         } }>disconnect
         </button>
         <div>
            { socketConnected ? "Connected" : "not connected" }
         </div>

         <div>
            <input type="number" onChange={ (e) => setFieldNumber(Number(e.target.value)) }/>
            <button disabled={ socket === null } onClick={ makeMove }>make move</button>
         </div>

      </>
   );
}

export default App;
