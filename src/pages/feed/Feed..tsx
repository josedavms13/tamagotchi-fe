import {IFeedTypes} from "./feed.types.ts";
import chees from "../../assets/sprites/food/chees.png";
import juice from "../../assets/sprites/food/juice.png";
import chicken from "../../assets/sprites/food/chicken.png";
import {useState} from "react";
import "./feed.styles.css";

export function Feed({onFeedDisplay, hungryStats}: IFeedTypes) {
   const [hungryDisplay, setHungryDisplay] = useState(hungryStats);

   function f() {

   }

   function chickenClick() {
      if(hungryDisplay > 4){
         setHungryDisplay((prev) => prev - 5);
      }

   }

   function cheeseClick() {
      if(hungryDisplay > 2){
         setHungryDisplay((prev) => prev - 3);
      }
   }

   function juiceClick() {
      if(hungryDisplay > 0){
         setHungryDisplay((prev) => prev - 1);
      }
   }


   return (
      <div className={"feedComponent"}>
         <div className={ "foodItems" }>
            <div className={ "imageContainer" } onClick={ chickenClick }>
               <img src={ chicken } alt={ "chicken" }/>
            </div>
            <div className={ "imageContainer" } onClick={ cheeseClick }>
               <img src={ chees } alt={ "chess" }/>
            </div>
            <div className={ "imageContainer" } onClick={ juiceClick }>
               <img src={ juice } alt={ "juice" }/>
            </div>
         </div>
         <div className={ "hungryStats" }>
            <span>{ hungryDisplay }</span>
         </div>

      </div>
   );
}
