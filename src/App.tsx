
import {Screen} from "./pages/screen/Screen.tsx";
import {PlayerColor} from "./hook/playerCharacter/usePlayerCharacterTypes.ts";
import {useLogin} from "./hook/Login/UseLogin.tsx";
import {useRegister} from "./hook/Register/UseRegister.tsx";
import {useEffect} from "react";


function App() {

   const {login} = useLogin();


   const {doRegister} = useRegister();

   useEffect(() => {
      doRegister("pepe", "aoeuaoeu", PlayerColor.RED);
   }, []);


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
