import {Sky} from "./parts/Sky/Sky.tsx";
import "./scenario.css";

export function Scenario() {

   return (
      <div className={ "scenario" }>

         <div className={ "space" }>
            <Sky/>
         </div>


      </div>
   );
}
