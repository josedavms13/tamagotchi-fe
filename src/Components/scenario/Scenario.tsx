import {Sky} from "./parts/Sky/Sky.tsx";
import "./scenario.css";
import {PlayerCharacter} from "../playerCharacter/PlayerCharacter.tsx";
import {IScenarioTypes} from "./scenario.types.ts";
import backgroundImage from "../../assets/sprites/backgroundScenary.png";

export function Scenario({characterColor}:IScenarioTypes) {

   return (
      <div className={ "scenario" }>
         <img src={backgroundImage} alt="background Scenary"/>
         <div className={ "space" }>
            <Sky/>
         </div>
         <div className="floor">
            <div className={ "playerCharacter" }>
               <PlayerCharacter characterColor={ characterColor }/>
            </div>
         </div>
      </div>
   );

}
