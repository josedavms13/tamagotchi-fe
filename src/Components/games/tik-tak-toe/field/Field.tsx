import {IFieldBox} from "./field.types.ts";
import "./field.css";

export function Field({fieldMark, isLocked, id, onFieldSelected}: IFieldBox) {
   function handleFieldClick() {
      if (!isLocked) {
         onFieldSelected(id);
      }
   }

   return (
      <div className={ "square" } onClick={ handleFieldClick }>
         <span>{ fieldMark }</span>
         { id }
      </div>
   );
}
