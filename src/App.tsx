import {useRef} from "react";
import {WebSockets} from "./Classes/WebSockets/WebSockets.ts";
import {TikTakToe} from "./Components/games/tik-tak-toe/TikTakToe.tsx";

function App() {

   const sockets = useRef<WebSockets>(
      new WebSockets("http://localhost", 4500)
   );

   return (
      <>
         <TikTakToe />
      </>
   );
}

export default App;
