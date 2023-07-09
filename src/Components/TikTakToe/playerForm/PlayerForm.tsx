import {IPlayerFormTypes} from "./playerForm.types.ts";
import "./playerForm.css";

export function PlayerForm({onSinglePlayerClick, onMultiPlayerClick, onCancel}: IPlayerFormTypes) {

   return(
      <div className={"selectContainer"}>
         <button className={"singlePlayer"} onClick={ onSinglePlayerClick}>
            SINGLE PLAYER
         </button>

         <button disabled={true} className={"multiPlayer"} onClick={ onMultiPlayerClick}>
            MULTIPLAYER
         </button>

         <button onClick={onCancel}>
            Cancel
         </button>
      </div>
   );
}
