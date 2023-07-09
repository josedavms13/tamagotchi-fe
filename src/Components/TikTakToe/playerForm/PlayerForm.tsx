import {IPlayerFormTypes} from "./playerForm.types.ts";
import "./playerForm.css";
import {useState} from "react";
import {TikTakToe} from "../../games/tik-tak-toe/TikTakToe.tsx";

export function PlayerForm({onSinglePlayerClick, onMultiPlayerClick}: IPlayerFormTypes) {

   const [singlePlayer, setSinglePlayer] = useState(false);

   function onSinglePlayer() {
      setSinglePlayer(true);
   }
   return(
      <div className={"selectContainer"}>
         <button className={"singlePlayer"} onClick={ onSinglePlayerClick}>
            SINGLE PLAYER
         </button>

         <button className={"multiPlayer"} onClick={ onMultiPlayerClick}>
            MULTIPLAYER
         </button>

         {
            singlePlayer && <TikTakToe/>
         }
      </div>
   );
}
