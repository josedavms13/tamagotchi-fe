import {IFieldBox} from "./field.types.ts";
import "./field.css";

export function Field({fieldMark, id, onFieldSelected}: IFieldBox) {

   return (
      <div className={ "square" } onClick={ () => onFieldSelected(id) }>
         <span>{ fieldMark }</span>
      </div>
   );
}
