import {useState} from "react";
import "./tikTakToe.css";
import {ITicTacFieldData} from "./tikTakToeTypes.ts";

export function TikTakToe() {

   const [fields, setFields] = useState<ITicTacFieldData[]>([
      {
         fieldData: "",
         isLocked: false
      }, {
         fieldData: "",
         isLocked: false
      }, {
         fieldData: "",
         isLocked: false
      }, {
         fieldData: "",
         isLocked: false
      }, {
         fieldData: "",
         isLocked: false
      }, {
         fieldData: "",
         isLocked: false
      }, {
         fieldData: "",
         isLocked: false
      }, {
         fieldData: "",
         isLocked: false
      }, {
         fieldData: "",
         isLocked: false
      },
   ]);

   const [turnA, setTurnA] = useState<boolean>(true);

   const [isUsed, setIsUsed] = useState<boolean>(false);

   function markField(fieldIndex: number) {
      if (!isUsed) {
         if (turnA) {
            setFields("X");
            setTurnA(false);
            setIsUsed(true);
         } else {
            setFields("O");
            setTurnA(true);
            setIsUsed(true);
         }
      }
   }

   return (
      <div className="general-container">
         <div className="row">
            <div className="square" onClick={ () => {
               markField();
            } }>
               <h2>{ fields }</h2>
            </div>
            <div className="square" onClick={ () => {
               markField();
            } }>
               <h2>{ fields }</h2>
            </div>
            <div className="square" onClick={ () => {
               markField();
            } }>
               <h2>{ fields }</h2>
            </div>
         </div>
         <div className="row">
            <div className="square" onClick={ () => {
               markField();
            } }>
               <h2>{ fields }</h2>
            </div>
            <div className="square" onClick={ () => {
               markField();
            } }>
               <h2>{ fields }</h2>
            </div>
            <div className="square" onClick={ () => {
               markField();
            } }>
               <h2>{ fields }</h2>
            </div>
         </div>
         <div className="row">
            <div className="square" onClick={ () => {
               markField();
            } }>
               <h2>{ fields }</h2>
            </div>
            <div className="square" onClick={ () => {
               markField();
            } }>
               <h2>{ fields }</h2>
            </div>
            <div className="square" onClick={ () => {
               markField();
            } }>
               <h2>{ fields }</h2>
            </div>
         </div>
      </div>
   );

}
