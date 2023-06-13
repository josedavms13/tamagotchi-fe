import {useEffect, useState} from "react";
import "./tikTakToe.css";
import {ITicTacFieldData} from "./tikTakToeTypes.ts";
import {Field} from "./field/Field.tsx";

export function TikTakToe() {

   const [fields, setFields] = useState<ITicTacFieldData[]>([
      {
         fieldData: "",
         isLocked: false,
         index: 0
      }, {
         fieldData: "",
         isLocked: false,
         index: 1
      }, {
         fieldData: "",
         isLocked: false,
         index: 2
      }, {
         fieldData: "",
         isLocked: false,
         index: 3
      }, {
         fieldData: "",
         isLocked: false,
         index: 4
      }, {
         fieldData: "",
         isLocked: false,
         index: 5
      }, {
         fieldData: "",
         isLocked: false,
         index: 6
      }, {
         fieldData: "",
         isLocked: false,
         index: 7
      }, {
         fieldData: "",
         isLocked: false,
         index: 8
      },
   ]);

   const [turnA, setTurnA] = useState<boolean>(true);
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
      console.log(fieldIndex);
   }

   return (
      <div className="general-container">
         {
            rowsData && rowsData.length > 0 &&
            rowsData.map((row: ITicTacFieldData[]) => (
               <div className="row">
                  {
                     row.map((field: ITicTacFieldData) => (
                        <Field id={ field.index } fieldMark={ field.fieldData } isLocked={ field.isLocked }
                           onFieldSelected={ markField }/>
                     ))
                  }
               </div>
            ))
         }
      </div>
   );
}
