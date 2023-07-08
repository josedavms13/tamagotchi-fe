import "./playtogether.css";
import {useEffect, useState} from "react";
import {usePlayTogether} from "./UsePlayTogether/UsePlayTogether.tsx";

export function PlayTogether() {

   const [step, setStep] = useState(0);
   const {
      createServer,
      connect,
      createRoom
   } = usePlayTogether();
   const [buttonsDisabled, setButtonsDisabled] = useState<boolean[]>([
      false, true, true
   ]);


   useEffect(() => {
      setButtonsDisabled((prev) => prev.map((_, index) => index !== step));
   }, [step]);

   function nextStep() {
      setStep(prev => {
         if (prev + 1 < buttonsDisabled.length) {
            return prev + 1;
         } else {
            return prev;
         }
      });
   }

   const [roomNameInput, setRoomNameInput] = useState("");

   return (
      <div className={ "play-together" }>
         <div className="step-box">
            <label>First step</label>
            <button onClick={ () => {
               createServer();
               nextStep();
            } }
            about={ "Creates a server to play online with one friend" }
            disabled={ buttonsDisabled[0] }>
               Create online server
            </button>
         </div>
         <div className="step-box">
            <button disabled={ buttonsDisabled[1]}
               onClick={()=> {
                  connect();
                  nextStep();
               }}>
               Connect
            </button>
         </div>
         <div className="step-box">
            <span>Room Name</span>
            <input type="text" disabled={buttonsDisabled[2]}
               onChange={ (event) => setRoomNameInput(event.target.value) }
            />
            <button
               disabled={ buttonsDisabled[2] }
               onClick={ () => {
                  createRoom(roomNameInput);
                  nextStep();
               } }>
               Create room
            </button>
         </div>

      </div>
   );
}
