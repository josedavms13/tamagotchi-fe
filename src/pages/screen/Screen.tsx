import {Header} from "../../Components/header/Header.tsx";
import {Scenario} from "../../Components/scenario/Scenario.tsx";
import "./screen.css";
import {Stats} from "../../Components/scenario/parts/Stacks/Stats.tsx";
import {useEffect, useState} from "react";
import {tScreen} from "./screen.types.ts";
import {PlayerForm} from "../../Components/TikTakToe/playerForm/PlayerForm.tsx";
import {usePlayerCharacter} from "../../hook/playerCharacter/UsePlayerCharacter.tsx";

export function Screen() {


   // region CHARACTER
   const {
      ageCharacter,
      hungryCharacter,
      funCharacter,
      heartCharacter,
      dinosaurCharacter,
      isAliveCharacter,
      feed,
      happinessModify,
      dead,
      toName,
      toColorSelect,
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
      console.log(funCharacter, "funCharacter", heartCharacter, "heartCharacter", ageCharacter, "ageCharacter", feed(2), "feed", hungryCharacter, "hungryCharacter", dinosaurCharacter, "dinosaurCharacter", dead, "dead", toName("pepe"), "toName", toColorSelect("green"), "toSelectColor", isAliveCharacter, "isAlive", happinessModify(1), "happiness");
   }, [happinessModify, funCharacter, heartCharacter, ageCharacter, feed, hungryCharacter, dinosaurCharacter, dead, toName, toColorSelect, isAliveCharacter ]);

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

   //region FEED

   //endregion FEED

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
