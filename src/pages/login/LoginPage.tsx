import {ILoginPageTypes} from "./loginPageTypes.ts";
import "./loginPageStyles.css";
import {useState} from "react";
import {Message} from "../../Components/message/Message.tsx";
import {IMessage} from "../../Components/message/message.types.ts";

export function LoginPage({
   onLoginSubmit,
   onLoginCancel
}: ILoginPageTypes) {

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
      setTimeout(() => {
         setMessageInfo(null);
      }, 2000);
   }

   return (
      <div className="loginPage">
         <div className="userName">
            <label htmlFor={ "user-name-field" }>User Name</label>
            <input id={ "user-name-field" } type="text" className={ "completeBar" }
               onChange={ (ev) => setUserNameField(ev.target.value) }/>
         </div>
         <div className="password">
            <label htmlFor={ "password-field" }>Password</label>
            <input id={ "password-field" } type="password" className={ "completeBar" }
               onChange={ (ev) => setPasswordField(ev.target.value) }/>
         </div>
         <div className={ "buttons" }>
            <button className={ "submitLogin" }
               type={ "submit" }
               onClick={ submitLoginInfo }>
               submit
            </button>
            <button onClick={ onLoginCancel }>
               Go Back
            </button>
         </div>
         {
            messageInfo && <Message title={messageInfo.title} message={messageInfo.message}/>
         }

      </div>
   );
}



