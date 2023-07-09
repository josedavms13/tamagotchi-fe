import {useEffect, useState} from "react";
import "./tikTakToe.css";
import {ITicTacFieldData, ITicTacToe} from "./tikTakToeTypes.ts";
import {Field} from "./field/Field.tsx";
import {useTicTacToe} from "./useTicTac/UseTicTac.tsx";
import {Message} from "../../message/Message.tsx";

export function TikTakToe({petName, onCancel, onLose, onWin}: ITicTacToe) {

   const {
      message,
      doMove,
      fields
   } = useTicTacToe({petName, onWin, onLose});

   const [rowsData, setRowsData] = useState<ITicTacFieldData[][]>(() => {
      const resultArray: ITicTacFieldData[][] = [];
      const fieldsCopy = [...fields];
      for (let i = 0; i < 3; i++) {
         const sliced = fieldsCopy.splice(0, 3);
         resultArray.push(sliced);
      }
      return resultArray;
   });

   useEffect(() => {
      const resultArray: ITicTacFieldData[][] = [];
      const fieldsCopy = [...fields];
      for (let i = 0; i < 3; i++) {
         const sliced = fieldsCopy.splice(0, 3);
         resultArray.push(sliced);
      }
      setRowsData(resultArray);
   }, []);

   return (
      <div className="tic-tac-toe">
         <h1>Tic Tac Toe</h1>
         <h4>{ petName }</h4>
         {
            fields &&
            <div className={ "tic-tac-toe-container" }>
               {
                  fields.map((field) => <Field
                     key={ field.index }
                     id={ field.index }
                     fieldMark={ field.fieldData }
                     isLocked={ field.isLocked }
                     onFieldSelected={ doMove }/>)
               }
            </div>
         }
         <button onClick={ onCancel }>
            Cancel
         </button>
         {
            message &&
            <Message title={ message.title } message={ message.message }/>
         }
      </div>
   );
}
