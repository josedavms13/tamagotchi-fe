import {PlayTogether} from "../playTogether/PlayTogether.tsx";
import {TikTakToe} from "./TikTakToe.tsx";

export function PlayerForm() {

   function OnSinglePlayerClick() {
      <TikTakToe />
      console.log("click single player")
   }
   function OnMultiPlayerClick() {
      <PlayTogether/>
      console.log("click multi player")

   }

   return(
      <div className={"selectContainer"}>
         <div className={"singlePlayer"} onClick={ OnSinglePlayerClick}>
            SINGLE PLAYER
         </div>
         <div className={"multiPlayer"} onClick={ OnMultiPlayerClick}>
            MULTIPLAYER

         </div>
      </div>
   )
}
