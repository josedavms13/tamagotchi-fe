import "../../assets/sprites/dinocharacters/gifs/DinoSprites_blue.gif";
import "../../assets/sprites/dinocharacters/gifs/DinoSprites_red.gif";
import "../../assets/sprites/dinocharacters/gifs/DinoSprites_green.gif";
import "../../assets/sprites/dinocharacters/gifs/DinoSprites_yellow.gif";
import {usePlayerCharacter} from "../../hook/playerCharacter/UsePlayerCharacter.tsx";

export function character() {
   const dinosaurCharacter = usePlayerCharacter({
      fun: 100,
      age: 1,
      dinosaur: "",
      isAlive: true,
      color: "green",
      name: "Pepe",
      hungry: 0,
      heart: 100
   });


   return (
      <>
         <h1>{ dinosaurCharacter.funCharacter }</h1>
         <span>
            { dinosaurCharacter.ageCharacter }
            { }
         </span>
      </>
   );
}

