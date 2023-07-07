import {Header} from "../../Components/header/Header.tsx";
import {Scenario} from "../../Components/scenario/Scenario.tsx";
import "./screen.css";
import {Stats} from "../../Components/scenario/parts/Stats/Stats.tsx";
import {useEffect, useState} from "react";
import {IScreen, tScreen} from "./screen.types.ts";
import {PlayerForm} from "../../Components/TikTakToe/playerForm/PlayerForm.tsx";
import {usePlayerCharacter} from "../../hook/playerCharacter/UsePlayerCharacter.tsx";
import {Feed} from "../feed/Feed..tsx";
import {PlayTogether} from "../../Components/playTogether/PlayTogether.tsx";

export function Screen({petIsAlive, petName, petAge, petFun, petHeart, petHungry, petColor}: IScreen) {


   // region CHARACTER
   const {
      ageCharacter,
      hungryCharacter,
      funCharacter,
   } = usePlayerCharacter({
      isAlive: petIsAlive,
      fun: petFun,
      age: petAge,
      heart: petHeart,
      hungry: petHungry,
      name: petName,
      color: petColor
   });

   // endregion CHARACTER

   const [currentScreen, setCurrentScreen] = useState<tScreen>("game");
   const [showPlayForm, setShowPlayForm] = useState(false);
   const [showFeedForm, setShowFeedForm] = useState(false);
   const [showPlayTogether, setShowPlayTogether] = useState(false);


   // eslint-disable-next-line react-hooks/exhaustive-deps
   function refresh() {
      setShowPlayForm(false);
      setShowFeedForm(false);
      setShowPlayTogether(false);
   }

   // Changes within pages
   useEffect(() => {
      refresh();
      switch (currentScreen) {
      case "playForm":
         setShowPlayForm(true);
         break;
      case "playTogether":
         setShowPlayTogether(true);
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
      setCurrentScreen("playTogether");
   }

   // endregion PlayerForm

   //region FEED
   function onHeaderFeed() {
      console.log("feed click");
   }

   //endregion FEED


   // region PlayTogether
   function openPlayTogether() {
      setCurrentScreen("playTogether");
   }


   // endregion PlayTogether


   return (
      <div className={ "screen" }>
         <div className={"header"}>
            <Header
               petName={ petName }
               age={ ageCharacter }
               onHeaderFeed={ onHeaderFeedClick }
               onHeaderPlayerFormClick={ onHeaderPlayerFormClick }
               onPlayTogetherClick={ openPlayTogether }/>
         </div>
         <div className={ "infoSection" }>
            <Scenario characterColor={ petColor }/>
            <Stats hungryStats={ hungryCharacter } funStats={ funCharacter }/>

         </div>

         {
            showPlayForm &&
            <PlayerForm onMultiPlayerClick={ onHeaderMultiPlayer } onSinglePlayerClick={ onHeaderSinglePlayer }/>
         }
         {
            showFeedForm &&
            <Feed onFeedDisplay={ onHeaderFeed } hungryStats={ hungryCharacter }/>
         }
         {
            showPlayTogether &&
            <PlayTogether/>
         }
      </div>
   );
}
