import {IPlayerFormTypes} from "./playerForm.types.ts";
import "./playerForm.css";

export function PlayerForm({onSinglePlayerClick, onMultiPlayerClick}:IPlayerFormTypes) {



   return(
      <div className={"selectContainer"}>
         <div className={"singlePlayer"} onClick={ onSinglePlayerClick}>
            SINGLE PLAYER
         </div>
         <div className={"multiPlayer"} onClick={ onMultiPlayerClick}>
            MULTIPLAYER

         </div>
      </div>
   );
}
