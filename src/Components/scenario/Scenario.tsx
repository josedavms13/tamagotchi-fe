import {Sky} from "./parts/Sky/Sky.tsx";
import "./scenario.css";
import {PlayerCharacter} from "../playerCharacter/PlayerCharacter.tsx";
import {IScenarioTypes} from "./scenario.types.ts";

export function Scenario({characterColor}:IScenarioTypes) {

   return (
      <div className={ "scenario" }>

         <div className={ "space" }>
            <Sky/>
         </div>
         <div className={"playerCharacter"}>
            <PlayerCharacter characterColor={characterColor}/>
         </div>
      </div>
   );

}
