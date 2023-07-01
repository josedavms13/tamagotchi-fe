import {ILoginPageTypes} from "./loginPageTypes.ts";
import "./loginPageStyles.css";
import {useState} from "react";

export function LoginPage({onLoginSubmit, onCancelLogin}: ILoginPageTypes) {

   const [userNameField, setUserNameField] = useState("");
   const [passwordField, setPasswordField] = useState("");

   const [messageInfo, setMessageInfo] = useState<null | IMessage>(null);

   function submitLoginInfo() {
      if (!userNameField || userNameField.length < 1) {
         showMessage({
            title: "User name must be provided",
            message: "User name is empty"
         });
         return;
      }
      if (!passwordField || passwordField.length < 1) {
         showMessage(({
            title: "Password must be provided",
            message: "password name is empty"
         }));
         return;
      }
      onLoginSubmit(userNameField, passwordField);
   }

   function showMessage(message: IMessage) {
      setMessageInfo(message);
      setTimeout(()=> {
         setMessageInfo(null);
      }, 2000);
   }

   return (
      <div className="loginPage">
         <div className="userName">
            <label form="userName">User Name</label>
            <input type="text" className={ "completeBar" }>{ userName }</input>
         </div>
         <div className="password">
            <label form={ "loginPassword" }>Password</label>
            <input type="password" className={ "completeBar" }>{ password }</input>
         </div>
         <div className={ "buttons" }>
            <button className={ "submitLogin" }
               type={ "submit" }
               onClick={submitLoginInfo}>
               submit
            </button>
            <button onClick={ onCancelLogin }>
               Home

            </button>
         </div>

      </div>
   );
}

interface IMessage {title: string, message: string}



function Message({title, message}: IMessage) {
   return (
      <div>
         <h6>{title}</h6>
         <p>{message}</p>
      </div>
   );
}
