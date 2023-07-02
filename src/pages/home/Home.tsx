import {LoginPage} from "../login/LoginPage.tsx";
import {Register} from "../Register/Register.tsx";
import {useEffect, useState} from "react";
import {tHome} from "./home.types.ts";
import "./home.css";

export function Home() {
   const [loginPageOn, setLoginPageOn] = useState(true);
   const [registerPageOn, setRegisterPageOn] = useState(true);


   const [currentScreen, setCurrentScreen] = useState<tHome>("Home");

   useEffect(() => {
      refresh();
      switch (currentScreen) {
      case "Login":
         setLoginPageOn(true);
         break;
      case "Register":
         setRegisterPageOn(true);
         break;

      }

   }, [currentScreen, refresh]);

   function refresh() {
      setLoginPageOn(false);
      setRegisterPageOn(false);
   }

   function onLoginButton() {
      setCurrentScreen("Login");
   }

   function onRegisterButton() {
      setCurrentScreen("Register");
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
               registerPageOn && <Register onUserRegister={ onRegisterButton } password={""} petName={""} petColor={"green"} username={""}/>
            }
         </button>
      </div>
   );
}
