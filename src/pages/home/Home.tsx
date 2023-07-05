import {LoginPage} from "../login/LoginPage.tsx";
import {Register} from "../Register/Register.tsx";
import {useEffect, useState} from "react";
import {tHome} from "./home.types.ts";
import "./home.css";

export function Home() {
   const [loginPageOn, setLoginPageOn] = useState(false);
   const [registerPageOn, setRegisterPageOn] = useState(false);


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

   function loginSubmitSent() {
      console.log("login sent");
   }




   return (
      <div className={ "mainPage" }>

         <button onClick={ onLoginButton } className={ "buttons" }> Login

         </button>
         <button onClick={ onRegisterButton } className={ "buttons" }> Register

         </button>
         {
            loginPageOn && <LoginPage onLoginSubmit={ loginSubmitSent }/>
         }
         {
            registerPageOn &&
            <Register onUserRegister={ onRegisterButton } password={ null } petName={ null } petColor={ "orange" }
               username={ null }/>
         }
      </div>
   );
}
