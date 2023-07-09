import "./tikTakToe.css";
import {ITicTacToe} from "./tikTakToeTypes.ts";
import {Field} from "./field/Field.tsx";
import {useTicTacToe} from "./useTicTac/UseTicTac.tsx";
import {TicTacMessage} from "./ticTacMessage/TicTacMessage.tsx";

export function TikTakToe({petName, onCancel, onLose, onWin, onEven}: ITicTacToe) {

   const {
      doPlayerMove,
      fields,
      currentPlayer,
      isIAThinking,
   } = useTicTacToe({petName, onWin, onLose, onEven});

   return (
      <div className="tic-tac-toe">
         <h1>Tic Tac Toe</h1>
         <h4>{ currentPlayer.toUpperCase() }</h4>
         {
            fields &&
            <div className={ "tic-tac-toe-container" }>
               {
                  fields.map((field) => <Field
                     key={ field.index }
                     id={ field.index }
                     fieldMark={ field.fieldData }
                     isLocked={ field.isLocked }
                     onFieldSelected={ doPlayerMove }/>)
               }
            </div>
         }
         <button onClick={ onCancel }>
            Cancel
         </button>
         {
            isIAThinking &&
            <TicTacMessage/>
         }
      </div>
   );
}
