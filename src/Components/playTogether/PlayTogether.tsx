import "./playtogether.css";
import {useEffect, useState} from "react";
import {createSocketServer} from "../../services/socketServices.ts";

export function PlayTogether() {

   const [step, setStep] = useState(0);
   const [port, setPort] = useState<null | number>(null);

   function createServer() {
      createSocketServer()
         .then((data) => {
            setPort(data.data.port);
         });
   }

   useEffect(() => {
      console.log(port);
   }, [port]);

   return (
      <div className={ "play-together" }>
         <button onClick={ createServer }>
            Create online server
         </button>
         <div className="port-section">
            <h6>{ }</h6>
         </div>
      </div>
   );
}
