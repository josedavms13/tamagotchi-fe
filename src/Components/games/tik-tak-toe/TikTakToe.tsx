import {useState} from "react";
import "./tikTakToe.css"

export function TikTakToe() {

   const [fields, setFilds] = useState<string>("")

   const [turnA, setTurnA] = useState<boolean>(true)

   const [isUsed, setIsUsed] = useState<boolean>(false)
   function markField(){
      if(!isUsed){
         if (turnA){
            setFilds("X");
            setTurnA(false);
            setIsUsed(true)
         }
         else {
            setFilds("O");
            setTurnA(true);
            setIsUsed(true)
         }
      }
   }

   return(
      <div className="general-container">
         <div className="row">
            <div className="square" onClick={()=>{markField()}}>
               <h2>{fields}</h2>
            </div>
            <div className="square" onClick={()=>{markField()}}>
               <h2>{fields}</h2>
            </div>
            <div className="square" onClick={()=>{markField()}}>
               <h2>{fields}</h2>
            </div>
         </div>
         <div className="row">
            <div className="square" onClick={()=>{markField()}}>
               <h2>{fields}</h2>
            </div>
            <div className="square" onClick={()=>{markField()}}>
               <h2>{fields}</h2>
            </div>
            <div className="square" onClick={()=>{markField()}}>
               <h2>{fields}</h2>
            </div>
         </div>
         <div className="row">
            <div className="square" onClick={()=>{markField()}}>
               <h2>{fields}</h2>
            </div>
            <div className="square" onClick={()=>{markField()}}>
               <h2>{fields}</h2>
            </div>
            <div className="square" onClick={()=>{markField()}}>
               <h2>{fields}</h2>
            </div>
         </div>
      </div>
   )

}
