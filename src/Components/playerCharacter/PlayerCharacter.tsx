import blueDino from "../../assets/sprites/dinocharacters/gifs/DinoSprites_blue.gif";
import redDino from "../../assets/sprites/dinocharacters/gifs/DinoSprites_red.gif";
import greenDino from "../../assets/sprites/dinocharacters/gifs/DinoSprites_green.gif";
import yellowDino from "../../assets/sprites/dinocharacters/gifs/DinoSprites_yellow.gif";
import {IPlayerCharacterTypes} from "./playerCharacter.types.ts";
import "./playerCharacter.css";
import {useEffect, useState} from "react";
import {PlayerColor} from "../../hook/playerCharacter/usePlayerCharacterTypes.ts";

export function PlayerCharacter({characterColor}: IPlayerCharacterTypes) {

   const [characterUrl, setCharacterUrl] = useState<null | string>(null);
   useEffect(() => {
      switch (characterColor) {
      case PlayerColor.BLUE:
         setCharacterUrl(blueDino);
         break;
      case PlayerColor.GREEN:
         setCharacterUrl(greenDino);
         break;
      case PlayerColor.RED:
         setCharacterUrl(redDino);
         break;
      case PlayerColor.YELLOW:
         setCharacterUrl(yellowDino);
         break;
      }
   }, [characterColor]);

   const [animationStyles, setAnimationStyles] = useState<any>({});

   function jump() {
      setAnimationStyles({"animationName": "dinoJump", "animationIterationCount": 1,
         "animationPlayState": "initial"});
   }

   function animationEnd() {
      setAnimationStyles({});
   }


   return (
      <div className={ "player-character" }
         style={animationStyles}
         onClick={jump}
         onAnimationEnd={animationEnd}
      >
         { characterUrl && <img src = { characterUrl } alt={ "dinosaur" }/> }
      </div>
   );
}
