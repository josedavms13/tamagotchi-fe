
import {Screen} from "./pages/screen/Screen.tsx";
import {PlayerColor} from "./hook/playerCharacter/usePlayerCharacterTypes.ts";
import {useEffect, useState} from "react";
import {useLogin} from "./hook/Login/UseLogin.tsx";
import {Home} from "./pages/home/Home.tsx";
import {useRegister} from "./hook/Register/UseRegister.tsx";
import {useCharacterStorage} from "./hook/CharacterStorage/UseCharacterStorage.tsx";


function App() {

   const {isAuth, doLogin} = useLogin();


   const {doRegister} = useRegister();

   const {getDataFromUser, saveNewUser} = useCharacterStorage();

   const [currentScreen, setCurrentScreen] = useState<appScreen>("home");

   const [fun, setFun] = useState<number>(100);
   const [age, setAge] = useState<number>(1);
   const [heart, setHeart] = useState<number>(100);
   const [hungry, setHungry] = useState<number>(0);
   const [name, setName] = useState<string>("");
   const [color, setColor] = useState<PlayerColor>();
   const [isAlive, setIsAlive] = useState<boolean>(true);

   const [showScreen, setShowScreen] = useState(false);
   const [showHome, setShowHome] = useState(false);

   // eslint-disable-next-line react-hooks/exhaustive-deps
   function refresh() {
      setShowScreen(false);
      setShowHome(false);
   }

   // Changes within pages
   useEffect(() => {
      refresh();
      switch (currentScreen) {
      case "home":
         setShowHome(true);
         break;
      case "screen":
         setShowScreen(true);
         break;
      }
   }, [currentScreen, refresh]);


   //region Login
   function login(userName: string, password: string) {
      doLogin(userName, password);
      const petInfo = getDataFromUser(userName);
      if (!petInfo) {
         console.error("User not found");
         setName(userName);
         return;
      }

      setName(petInfo.petName);
      setFun(petInfo.petFun);
      setAge(petInfo.petAge);
      setHeart(petInfo.petHeart);
      setHungry(petInfo.petHungry);
      setColor(petInfo.petColor);
   }


   //endregion Login

   //region Register
   function registerUser(userName: string, password: string, petName: string, dinosaurColor: PlayerColor) {
      doRegister(userName, password, petName, dinosaurColor);
      saveNewUser({
         userName,
         petAge: 0,
         petFun: 100,
         petColor: dinosaurColor,
         petHeart: 100,
         petHungry: 0,
         petName,
         petIsAlive: true
      });
   }

   //endregion

   return (
      <>
         {
            showScreen && isAuth &&
            < Screen
               petFun={ 100 }
               petAge={ 5 }
               petHeart={ 100 }
               petHungry={ 0 }
               petName={ "pablo" }
               petColor={ PlayerColor.RED }
               petIsAlive={ true }/>
         }
         {
            showHome &&
            <Home onRegisterButtonClick={ (userName,
               password,
               dinosaurColor,
               petName) => registerUser(userName, password, petName, dinosaurColor) }
            onLoginSubmit={ (userName, password) => login(userName, password) }/>
         }
      </>
   );
}

export default App;


type appScreen = "screen" | "home"
