import "./stack.css";
import iconFood from "../../../../assets/sprites/foodImage.jpg";
import happyFace from "../../../../assets/sprites/funnyFace.avif";

export function Stats() {
   return(
      <div className={"stacks"}>
         <div className={"hungry"}>
            <img src={iconFood} alt={"food"}/>
            hungry
         </div>
         <div className={"funLevel"}>
            <img src={happyFace} alt={"happyFace"}/>
            fun Level
         </div>
      </div>
   )
}
