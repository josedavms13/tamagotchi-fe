import {Clouds} from "./parts/Clouds.tsx";
import {Grass} from "./parts/Grass.tsx";
import {Stacks} from "./parts/Stacks/Stacks.tsx";
import "./scenario.css"

export function Scenario() {
   return (
      <div className={"scenario"}>
         <div className={"stacksSection"}>
            <Stacks />
         </div>
         <div className={"space"}>
            <Clouds />
            <Grass />
         </div>


      </div>
   )
}
