import {LoginPage} from "../login/LoginPage.tsx";
import {Register} from "../Register/Register.tsx";
import {useEffect, useState} from "react";
import {IHome, tHome} from "./home.types.ts";
import "./home.css";
import {PlayerColor} from "../../hook/playerCharacter/usePlayerCharacterTypes.ts";

export function Home({onLoginSubmit, onRegisterButtonClick}: IHome) {
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

   }, [currentScreen]);

   function refresh() {
      setLoginPageOn(false);
      setRegisterPageOn(false);
   }

   //region Login
   function onLoginButton() {
      setCurrentScreen("Login");
   }

   function cancelLogin() {
      setCurrentScreen("Home");
   }

   //endregion Login

   //region Register
   function onRegisterButton() {
      setCurrentScreen("Register");
   }

   function onRegisterComplete(userName: string, password: string, dinosaurColor: PlayerColor, petName: string) {
      onRegisterButtonClick(userName, password, dinosaurColor, petName);
      setCurrentScreen("Login");
   }


   function onRegisterCancel() {
      setCurrentScreen("Home");
   }

   //endregion Register


   return (
      <div className={ "mainPage" }>

         <button onClick={ onLoginButton } className={ "buttons" }> Login

         </button>
         <button onClick={ onRegisterButton } className={ "buttons" }> Register

         </button>
         {
            loginPageOn && <LoginPage onLoginCancel={ cancelLogin } onLoginSubmit={ onLoginSubmit }/>
         }
         {
            registerPageOn &&
            <Register onUserRegister={
               (usernameSubmit, passwordSubmit, petNameSubmit, petColorSubmit) => onRegisterComplete(usernameSubmit, passwordSubmit, petColorSubmit, petNameSubmit) }
            onRegisterCancel={ onRegisterCancel }/>
         }
      </div>
   );
}
