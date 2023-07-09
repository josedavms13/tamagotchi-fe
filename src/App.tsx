import {Screen} from "./pages/screen/Screen.tsx";
import {useEffect, useState} from "react";
import {useLogin} from "./hook/Login/UseLogin.tsx";
import {Home} from "./pages/home/Home.tsx";
import {useRegister} from "./hook/Register/UseRegister.tsx";
import {IUser} from "./hook/Login/login.types.ts";
import {IPetInfo} from "./hook/CharacterStorage/characterStorage.types.ts";
import {usePetStorage} from "./hook/CharacterStorage/UsePetStorage.tsx";


function App() {

   //region Session state Management
   const {getPetByUserName} = usePetStorage();
   const {isAuth, doLogin, user} = useLogin();
   const {doRegister} = useRegister();

   const [petCharacter, setPetCharacter] = useState<null | IPetInfo>(null);
   //endregion Session state Management

   //region Page Management
   const [currentScreen, setCurrentScreen] = useState<appScreen>("home");
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
   //endregion Page Management

   //region Login
   function login(userName: string, password: string) {
      doLogin(userName, password);
   }

   useEffect(() => {
      if (user) {
         getPetByUserName(user.username)
            .then(data => {
               setPetCharacter(data);
            });
      }
   }, [user, getPetByUserName]);

   useEffect(() => {
      if (user && isAuth && petCharacter) {
         setCurrentScreen("screen");
      }
   }, [user, isAuth, petCharacter]);

   //endregion Login

   //region Register
   function registerUser(user: IUser, pet: IPetInfo) {
      doRegister(user, pet);
   }

   //endregion

   return (
      <>
         {
            showScreen && isAuth && petCharacter &&
            < Screen
               petFun={ petCharacter.petFun }
               petAge={ petCharacter.petAge }
               petHeart={ petCharacter.petHeart }
               petHungry={ petCharacter.petHungry }
               petName={ petCharacter.petName }
               petColor={ petCharacter.petColor }
               petIsAlive={ petCharacter.petIsAlive }/>
         }
         {
            showHome &&
            <Home onRegisterButtonClick={ (user, pet) => registerUser(user, pet) }
               onLoginSubmit={ (userName, password) => login(userName, password) }/>
         }
      </>
   );
}

export default App;


type appScreen = "screen" | "home"
