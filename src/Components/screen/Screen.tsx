import {Header} from "../header/Header.tsx";
import {Scenario} from "../scenario/Scenario.tsx";
import "./screen.css";
import {Stats} from "../scenario/parts/Stacks/Stats.tsx";
import {useEffect, useState} from "react";
import {tScreen} from "./screen.types.ts";
import {PlayerForm} from "../TikTakToe/playerForm/PlayerForm.tsx";

export function Screen() {


   // region CHARACTER
   const {
      ageCharacter,
      feed,
      hungryCharacter,
      funCharacter,
      heartCharacter,
      dinosaurCharacter,
      dead,
      toName,
      toSelectColor
   } = usePlayerCharacter({
      isAlive: true,
      fun: 100,
      age: 0,
      heart: 100,
      hungry: 0,
      name: "pepe",
      dinosaur: "",
      color: "green"
   });

   useEffect(() => {
      console.log(funCharacter, "funCharacter", heartCharacter, "heartCharacter", ageCharacter, "ageCharacter", feed, "feed", hungryCharacter, "hungryCharacter", dinosaurCharacter, "dinosaurCharacter", dead, "dead", toName, "toName", toSelectColor, "toSelectColor");
   }, [funCharacter, heartCharacter, ageCharacter, feed, hungryCharacter, dinosaurCharacter, dead, toName, toSelectColor]);

   // endregion CHARACTER


   const [currentScreen, setCurrentScreen] = useState<tScreen>("game");
   const [showPlayForm, setShowPlayForm] = useState(false);


   function refresh() {
      setShowPlayForm(false);
   }

   useEffect(() => {
      refresh();
      switch (currentScreen) {
      case "playForm":
         setShowPlayForm(true);
         break;
      }
   }, [currentScreen, refresh]);

   //region Header
   function onHeaderPlayerFormClick() {
      setCurrentScreen("playForm");
      setShowPlayForm(true);
      console.log("go to play");
   }

   function onHeaderFeedClick() {
      setCurrentScreen("feed");
      console.log("gif food");
   }

   // endregion Header

   //region PlayerForm
   function onHeaderSinglePlayer() {
      console.log("Single playerForm");
   }

   function onHeaderMultiPlayer() {
      console.log("Multiplayer playerForm");
   }

   // endregion PlayerForm

   return (
      <div className={ "screen" }>
         <div>
            <Header petName={ "Pablito" } age={ 2 } onHeaderFeed={ onHeaderFeedClick }
               onHeaderPlayerFormClick={ onHeaderPlayerFormClick }/>
         </div>
         <div className={ "infoSection" }>
            <Scenario/>
            <Stats/>

         </div>

         {
            showPlayForm &&
            <PlayerForm onMultiPlayerClick={ onHeaderMultiPlayer } onSinglePlayerClick={ onHeaderSinglePlayer }/>
         }
      </div>
   );
}
