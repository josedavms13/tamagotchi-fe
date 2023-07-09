import {useEffect, useState} from "react";
import "./tikTakToe.css";
import {ITicTacFieldData, ITicTacToe} from "./tikTakToeTypes.ts";
import {Field} from "./field/Field.tsx";
import {useTicTacToe} from "./useTicTac/UseTicTac.tsx";
import {v4} from "uuid";

export function TikTakToe({onCancel, onLose, onWin}: ITicTacToe) {

   const {fields, playerMove} = useTicTacToe({userName: "Juan", onWin, onLose});

   const [rowsData, setRowsData] = useState<ITicTacFieldData[][]>([]);

   useEffect(() => {
      const resultArray: ITicTacFieldData[][] = [];
      const fieldsCopy = [...fields];
      for (let i = 0; i < 3; i++) {
         const sliced = fieldsCopy.splice(0, 3);
         resultArray.push(sliced);
      }
      setRowsData(resultArray);
   }, [fields]);

   function markField(fieldIndex: number) {
      playerMove(fieldIndex);
   }

   return (
      <div className="tic-tac-toe">
         <h1>Tic Tac Toe</h1>
         <div className="tic-tac-toe-container">
            {
               rowsData && rowsData.length > 0 &&
               rowsData.map((row: ITicTacFieldData[]) => (
                  <div key={ v4() } className="row">
                     {
                        row.map((field: ITicTacFieldData) => (
                           <Field key={ v4() } id={ field.index } fieldMark={ field.fieldData }
                              isLocked={ field.isLocked }
                              onFieldSelected={ markField }/>
                        ))
                     }
                  </div>
               ))
            }
         </div>
         <button onClick={onCancel}>
            Cancel
         </button>
      </div>
   );
}
