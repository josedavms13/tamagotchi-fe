import {useRef} from "react";
import {WebSockets} from "./Classes/WebSockets/WebSockets.ts";
import {Screen} from "./Components/screen/Screen.tsx";

function App() {

   const sockets = useRef<WebSockets>(
      new WebSockets("http://localhost", 4500)
   );

   return (
      <>
         <Screen />
         <button onClick={ () => sockets.current.connect(
            {
               onError: () => console.log("Connected"),
               onSuccess: () => console.log("Disconnected")
            }
         ) }>Connect
         </button>

         <button onClick={ () => sockets.current.move() }>
            Move
         </button>

      </>
   );
}

export default App;
