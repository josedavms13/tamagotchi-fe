import {Header} from "../../Components/header/Header.tsx";
import {Scenario} from "../../Components/scenario/Scenario.tsx";
import "./screen.css";
import {Stats} from "../../Components/scenario/parts/Stacks/Stats.tsx";
import {useEffect, useState} from "react";
import {tScreen} from "./screen.types.ts";
import {PlayerForm} from "../../Components/TikTakToe/playerForm/PlayerForm.tsx";
import {usePlayerCharacter} from "../../hook/playerCharacter/UsePlayerCharacter.tsx";
import {Feed} from "../feed/Feed..tsx";

export function Screen() {


   // region CHARACTER
   const {
      ageCharacter,
      hungryCharacter,
      funCharacter,
      heartCharacter,
      dinosaurCharacter,
      isAliveCharacter,
      colorCharacter,
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
      setHungryStats(hungryCharacter);
   }, [happinessModify, funCharacter, heartCharacter, ageCharacter, feed, hungryCharacter, dinosaurCharacter, dead, toName, toColorSelect, isAliveCharacter ]);

   // endregion CHARACTER


   const [currentScreen, setCurrentScreen] = useState<tScreen>("game");
   const [showPlayForm, setShowPlayForm] = useState(false);
   const [hungryStats, setHungryStats] = useState(0);
   const [showFeedForm, setShowFeedForm] = useState(false);


   function refresh() {
      setShowPlayForm(false);
      setShowFeedForm(false);
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
      setShowFeedForm(true);
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
   function onHeaderFeed() {
      console.log("feed click");
   }
   //endregion FEED

   return (
      <div className={ "screen" }>
         <div>
            <Header petName={ toName } age={ ageCharacter } onHeaderFeed={ onHeaderFeedClick }
               onHeaderPlayerFormClick={ onHeaderPlayerFormClick }/>
         </div>
         <div className={ "infoSection" }>
            <Scenario urlCharacter={dinosaurCharacter} colorCharacterSelect={colorCharacter}/>
            <Stats/>

         </div>

         {
            showPlayForm &&
            <PlayerForm onMultiPlayerClick={ onHeaderMultiPlayer } onSinglePlayerClick={ onHeaderSinglePlayer }/>
         }
         {
            showFeedForm &&
            <Feed onFeedDisplay={onHeaderFeed} hungryStats={hungryStats}/>
         }
      </div>
   );
}
