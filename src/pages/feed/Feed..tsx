import {IFeedTypes} from "./feed.types.ts";
import chees from "../../assets/sprites/food/chees.png";
import juice from "../../assets/sprites/food/juice.png";
import chicken from "../../assets/sprites/food/chicken.png";
import {useState} from "react";

export function Feed({onFeedDisplay, hungryStats}:IFeedTypes) {
   const [hungryDisplay, setHungryDisplay] = useState(hungryStats);

   function f() {

   }
   function chickenClick() {
      setHungryDisplay((prev)=> prev - 5);
   }

   function cheeseClick() {
      setHungryDisplay((prev)=>prev - 3);
   }

   function juiceClick() {
      setHungryDisplay((prev)=>prev - 1);
   }


   return(
      <div className={"foodItems"}>
         <div className={"chicken"} onClick={chickenClick}>
            <img src={chicken} alt={"chicken"}/>
            <span>{hungryDisplay}</span>
         </div>
         <div className={"chess"} onClick={cheeseClick}>
            <img src={chees} alt={"chess"}/>
            <span>{hungryDisplay}</span>
         </div>
         <div className={"juice"} onClick={juiceClick}>
            <img src={juice} alt={"juice"}/>
            <span>{hungryDisplay}</span>
         </div>
      </div>
   );
}
