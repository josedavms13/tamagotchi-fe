/* eslint-disable @typescript-eslint/no-explicit-any */
import {useEffect, useRef, useState} from "react";
import {io} from "socket.io-client";
import {SocketsEvents} from "./Classes/WebSockets/SocketsEvents.ts";
import {TicTacEvents} from "./Classes/TicTacToe/TicTacToeEvents.ts";
import {startSession} from "./services/session.ts";
import {IOnConnectionQuery} from "./Classes/WebSockets/Sockets.types.ts";


const socketUrl = "http://localhost:4545";

const connectionAttemptsLimit = 3;

function App() {

   const [socket, setSocket] = useState<any>(null);
   const [socketConnected, setSocketConnected] = useState(false);

   const [playerName, setPlayerName] = useState("");
   const [sessionId, setSessionId] = useState<number | null>(null);
   const [areMinPlayerRequired, setAreMinPlayerRequired] = useState(false);

   const connectionAttempts = useRef(0);

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

         socket.on(SocketsEvents.ConnectError, () => {
            if (connectionAttempts.current < connectionAttemptsLimit) {
               connectionAttempts.current += 1;
            } else {
               socket.disconnect();
               setSocket(null);
            }
         });

         console.log(socket);
      }
   }, [playerName, socket]);

   function connect(onConnectQuery: IOnConnectionQuery) {
      console.log(onConnectQuery);
      const stringedQuery = JSON.stringify(onConnectQuery);
      if (playerName.length > 0) {
         try {
            setSocket(io(socketUrl, {
               query: {
                  body: stringedQuery,
               }
            }));
         } catch (e) {
            setSocket(null);
         }
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

   function createGame() {
      startSession(roomName)
         .then(data => {
            console.log(data);
            setSessionId(data.data.dbData);
         });
   }

   useEffect(() => {
      console.log(sessionId);
   }, [sessionId]);

   const [roomName, setRoomName] = useState("");

   return (
      <>
         <input type="text" onChange={ (e) => setPlayerName(e.target.value) }/>
         <button onClick={ () => connect({
            query: {
               playerName: playerName,
               roomName: roomName
            }
         }) }>connect
         </button>
         <button onClick={ () => {
            socket.disconnect();
            setSocket(null);
         } }>disconnect
         </button>
         <div>
            { socketConnected ? "Connected" : "not connected" }
         </div>

         <label htmlFor={ "room-name" }>Room Name</label>
         <input id={ "room-name" } type="text" onChange={ (event) => setRoomName(event.target.value) }/>

         <button onClick={ createGame }>
            Create game
         </button>

         <div>
            <input type="number" onChange={ (e) => setFieldNumber(Number(e.target.value)) }/>
            <button disabled={ socket === null } onClick={ makeMove }>make move</button>
         </div>

      </>
   );
}

export default App;
