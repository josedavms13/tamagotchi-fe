import "./ticTacMessage.css";

export function TicTacMessage({title, message}: {title?: string, message?: string}) {

   return (

      <div className="tic-tac-toe-cover">
         <div className={ "tic-tac-toe-message" }>
            <h6>{ title ? title : "It is IA Turn" } </h6>
            <span>{ message ? message : "Thinking... "} </span>
         </div>
      </div>
   );
}
