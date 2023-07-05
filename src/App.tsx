import {Screen} from "./pages/screen/Screen.tsx";
import {PlayerColor} from "./hook/playerCharacter/usePlayerCharacterTypes.ts";

function App() {



   return (
      <>
         <Screen
            petFun={100}
            petAge={5}
            petHeart={100}
            petHungry={0}
            petName={"pablo"}
            petColor={PlayerColor.RED}
            petIsAlive={true} />
      </>
   );
}

export default App;
