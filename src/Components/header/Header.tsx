
import "./header.css";
import gameIcon from "../../assets/sprites/gameIcon.png";
import foodIcon from "../../assets/sprites/foodImage.jpg";
import {IHeaderComponent} from "./header.types.ts";
import {useState} from "react";
import {Feed} from "../../pages/feed/Feed..tsx";
export function Header({petName, age, onHeaderFeed, onHeaderPlayerFormClick}:IHeaderComponent) {
   const [feedClick] = useState(true);




   return(
      <div className={"header"}>
         <div className={"petInfo"}>
            <span>PET NAME:{petName}</span>
            <span>AGE:{age}</span>
         </div>
         <div className={"actionsBar"}>
            <div className={"game"} onClick={onHeaderPlayerFormClick} >
               <img src={gameIcon} alt={"game"}/>

            </div>
            <div className={"feed"}>
               {feedClick && <Feed onFeedDisplay={onHeaderFeed} hungryStats={50}/>}
               <img src={foodIcon} alt={"food"}/>
            </div>

         </div>

      </div>
   );
}
