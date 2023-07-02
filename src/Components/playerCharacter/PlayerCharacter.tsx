import "../../assets/sprites/dinocharacters/gifs/DinoSprites_blue.gif";
import "../../assets/sprites/dinocharacters/gifs/DinoSprites_red.gif";
import "../../assets/sprites/dinocharacters/gifs/DinoSprites_green.gif";
import "../../assets/sprites/dinocharacters/gifs/DinoSprites_yellow.gif";
import {IPlayerCharacterTypes} from "./playerCharacter.types.ts";

export function PlayerCharacter({url}:IPlayerCharacterTypes) {
   return(
      <div>
         <img src={url} alt={"dinosaur"}/>
      </div>
   );
}
