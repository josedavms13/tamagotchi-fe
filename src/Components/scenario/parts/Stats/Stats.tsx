import "./stats.css";
import iconFood from "../../../../assets/sprites/foodImage.jpg";
import happyFace from "../../../../assets/sprites/funnyFace.avif";
import {IStatsComponent} from "./stats.types.ts";

export function Stats({hungryStats, funStats}:IStatsComponent) {
   return(
      <div className={"stats"}>
         <div className={"statsIcon"}>
            <img src={iconFood} alt={"food"}/>
            <span className={"statName"}>HUNGRY</span>
            <span className={"statsNumber"}>{hungryStats}</span>
         </div>
         <div className={"statsIcon"}>
            <img src={happyFace} alt={"happyFace"}/>
            <span className={"statName"}>FUN LEVEL</span>
            <span className={"statsNumber"}>{funStats}</span>
         </div>
      </div>
   );
}
