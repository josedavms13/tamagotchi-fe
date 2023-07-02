import "./stack.css";
import iconFood from "../../../../assets/sprites/foodImage.jpg";
import happyFace from "../../../../assets/sprites/funnyFace.avif";
import {IStacksTypes} from "./stacks.types.ts";

export function Stats({hungryStats, funStats}:IStacksTypes) {
   return(
      <div className={"stacks"}>
         <div className={"hungry"}>
            <img src={iconFood} alt={"food"}/>
            hungry
            <span>{hungryStats}</span>
         </div>
         <div className={"funLevel"}>
            <img src={happyFace} alt={"happyFace"}/>
            fun Level
            <span>{funStats}</span>
         </div>
      </div>
   );
}
