import "./stats.css";
import iconFood from "../../../../assets/sprites/foodImage.jpg";
import happyFace from "../../../../assets/sprites/funnyFace.avif";
import {IStatsComponent} from "./stats.types.ts";

export function Stats({hungryStats, funStats}:IStatsComponent) {
   return(
      <div className={"stats"}>
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
