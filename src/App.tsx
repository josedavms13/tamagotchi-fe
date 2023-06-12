import {Screen} from "./Components/screen/Screen.tsx";
import {Topbar} from "./Components/topbar/Topbar.tsx";
import {Scenario} from "./Components/scenario/Scenario.tsx";
import {PlayerCharacter} from "./Components/playerCharacter/PlayerCharacter.tsx";
import {CharacterProvider} from "./context/Character/CharacterContext.tsx";

function App() {
   return (
      <>
         <Screen>
            <CharacterProvider>
               <Topbar>
               </Topbar>
            </CharacterProvider>
            <Scenario>
               <div/>
               <CharacterProvider>
                  <PlayerCharacter />
               </CharacterProvider>

            </Scenario>
         </Screen>
      </>
   );
}

export default App;
