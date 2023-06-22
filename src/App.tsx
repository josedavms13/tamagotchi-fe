import {useRef} from "react";
import {WebSockets} from "./Classes/WebSockets/WebSockets.ts";
import {Register} from "./Components/Register/Register.tsx";

function App() {

   const sockets = useRef<WebSockets>(
      new WebSockets("http://localhost", 4500)
   );

   return (
      <>
         <Register username={null} password={null} petName={null} perColor={null} />
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
