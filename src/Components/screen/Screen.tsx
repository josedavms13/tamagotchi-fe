import {Header} from "../header/Header.tsx";
import {Scenario} from "../scenario/Scenario.tsx";
import "./screen.css";

export function Screen() {
   return (
      <div className={"screen"}>
         <div>
            <Header petName={"pablito"} age={2}/>
         </div>
         <div>
            <Scenario />
         </div>

      </div>
   );
}
