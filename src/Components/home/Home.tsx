import {LoginPage} from "../login/LoginPage.tsx";
import {Register} from "../Register/Register.tsx";
import {useEffect, useState} from "react";
import {tHome} from "./home.types.ts";
import "./home.css";

export function Home() {
   const [loginPageOn, setLoginPageOn] = useState(true);
   const [registerPageOn, setRegisterPageOn] = useState(false);

   const [currentScreen, setCurrentScreen] = useState<tHome>("Home");

   useEffect(() => {
      refresh();
      switch (currentScreen) {
      case "Login":
         setLoginPageOn(true);
         setCurrentScreen("Login")
         break;
      case "Register":
         setRegisterPageOn(true);
         setCurrentScreen("Register")

         break;
      }

   }, [currentScreen, refresh]);

   function refresh() {
      setLoginPageOn(false);
      setRegisterPageOn(false);
   }

   function onLoginButton() {
      setLoginPageOn(true);
      setRegisterPageOn(false);
   }

   function onRegisterButton() {
      setRegisterPageOn(true);
      setLoginPageOn(false);
   }

   return (
      <div className={ "mainPage" }>
         <button onClick={ onLoginButton } className={ "buttons" }> Login
            {
               loginPageOn && <LoginPage userName={ null } password={ null }/>
            }
         </button>
         <button onClick={ onRegisterButton } className={ "buttons" }> Register
            {
               registerPageOn && <Register onUserRegister={onRegisterButton} onBackToHome={goBackHome}/>
            }
         </button>
      </div>
   );
}
