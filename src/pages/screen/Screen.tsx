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
import {TikTakToe} from "../../Components/games/tik-tak-toe/TikTakToe.tsx";

export function Screen({petIsAlive, petName, petAge, petFun, petHeart, petHungry, petColor}: IScreen) {


   // region CHARACTER
   const {
      ageCharacter,
      hungryCharacter,
      funCharacter,
      happinessModify,
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

   //region Page Management
   const [currentScreen, setCurrentScreen] = useState<tScreen>("game");
   const [showPlayForm, setShowPlayForm] = useState(false);
   const [showFeedForm, setShowFeedForm] = useState(false);
   const [showPlayTogether, setShowPlayTogether] = useState(false);
   const [showTicTacToe, setShowTicTacToe] = useState(false);
   const [showScenario, setShowScenario,] = useState(false);

   // eslint-disable-next-line react-hooks/exhaustive-deps
   function refresh() {
      setShowPlayForm(false);
      setShowFeedForm(false);
      setShowPlayTogether(false);
      setShowTicTacToe(false);
      setShowScenario(false);
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
      case "ticTacToe":
         setShowTicTacToe(true);
         break;
      case "game":
         setShowScenario(true);
         break;
      }
   }, [currentScreen, refresh]);

   function backToGame() {
      setCurrentScreen("game");
   }

   //endregion Page Management

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
      setCurrentScreen("ticTacToe");
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

   function onPlayerWin() {
      console.log("player win");
      happinessModify(8);
      setCurrentScreen("game");
   }

   function onPlayerLose() {
      console.log("player lose");
      happinessModify(-5);
      setCurrentScreen("game");
   }

   function onEven() {
      console.log("even");
      happinessModify(-2);
      setCurrentScreen("game");
   }


   return (
      <div className={ "screen" }>
         { showScenario && <div className={ "header" }>
            <Header
               petName={ petName }
               age={ ageCharacter }
               onHeaderFeed={ onHeaderFeedClick }
               onHeaderPlayerFormClick={ onHeaderPlayerFormClick }
               onPlayTogetherClick={ openPlayTogether }/>
         </div> }
         { showScenario &&
            <div className={ "infoSection" }>
               <Scenario characterColor={ petColor }/>
               <Stats hungryStats={ hungryCharacter } funStats={ funCharacter }/>
            </div> }

         {
            showPlayForm &&
            <PlayerForm onCancel={ backToGame } onMultiPlayerClick={ onHeaderMultiPlayer }
               onSinglePlayerClick={ onHeaderSinglePlayer }/>
         }
         {
            showFeedForm &&
            <Feed onFeedDisplay={ onHeaderFeed } hungryStats={ hungryCharacter }/>
         }
         {
            showPlayTogether &&
            <PlayTogether/>
         }
         {
            showTicTacToe &&
            <TikTakToe petName={ petName } onLose={ onPlayerLose } onWin={ onPlayerWin } onEven={ onEven }
               onCancel={ backToGame }/>
         }
      </div>
   );
}
