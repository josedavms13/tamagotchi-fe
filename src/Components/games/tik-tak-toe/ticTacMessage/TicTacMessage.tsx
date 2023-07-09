import "./ticTacMessage.css";

export function TicTacMessage() {

   return (

      <div className="tic-tac-toe-cover">
         <div className={ "tic-tac-toe-message" }>
            <h6> It is IA Turn </h6>
            <span>Thinking... </span>
         </div>
      </div>
   );
}
