
import "./header.css"
import gameIcon from "../../assets/sprites/gameIcon.png"
import foodIcon from "../../assets/sprites/foodImage.jpg"
export function Header({petName, age}:{petName:string, age:number}) {
   function OnPlayerFormClick() {
      console.log("go to play");
   }
   function OnFeedClick() {
      console.log("gif food")
   }
   return(
      <div className={"header"}>
         <div className={"petInfo"}>
            <span>PET NAME:{petName}</span>
            <span>AGE:{age}</span>
         </div>
         <div className={"actionsBar"}>
            <div className={"game"} onClick={OnPlayerFormClick}>
               <img src={gameIcon} alt={"game"}/>

            </div>
            <div className={"feed"} onClick={OnFeedClick}>
               <img src={foodIcon} alt={"food"}/>
            </div>

         </div>

      </div>
   )
}
