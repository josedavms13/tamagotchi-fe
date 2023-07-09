import {IFieldBox} from "./field.types.ts";
import "./field.css";
import {useEffect} from "react";

export function Field({fieldMark, id, onFieldSelected}: IFieldBox) {

   useEffect(() => {
      console.log("mounted");
   }, []);

   return (
      <div className={ "square" } onClick={ () => onFieldSelected(id) }>
         <span>{ fieldMark }</span>
      </div>
   );
}
