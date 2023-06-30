import {Sky} from "./parts/Sky/Sky.tsx"
import {Stats} from "./parts/Stacks/Stats.tsx";
import "./scenario.css"

export function Scenario() {

   return (
      <div className={"scenario"}>
         <div className={"stacksSection"}>
            <Stats />
         </div>
         <div className={"space"}>
            <Sky/>
         </div>


      </div>
   )
}
