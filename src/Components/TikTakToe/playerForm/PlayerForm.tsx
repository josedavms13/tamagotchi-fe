import {IPlayerFormTypes} from "./playerForm.types.ts";
import "./playerForm.css";

export function PlayerForm({onSinglePlayerClick, onMultiPlayerClick}: IPlayerFormTypes) {

   return(
      <div className={"selectContainer"}>
         <button className={"singlePlayer"} onClick={ onSinglePlayerClick}>
            SINGLE PLAYER
         </button>
         <button className={"multiPlayer"} onClick={ onMultiPlayerClick}>
            MULTIPLAYER
         </button>
      </div>
   );
}
