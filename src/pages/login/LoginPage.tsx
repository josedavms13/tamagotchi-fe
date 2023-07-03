import {ILoginPageTypes} from "./loginPageTypes.ts";
import "./loginPageStyles.css";
import {useState} from "react";
import {Home} from "../home/Home.tsx";
import {Screen} from "../screen/Screen.tsx";

export function LoginPage({onLoginSubmit, userNameInput, passwordInput, petAgeCharacter, petFunCharacter, petHeartCharacter, petIsALive, petHungryCharacter, petNameCharacter, petColorCharacter, petUrlImage}: ILoginPageTypes) {

   const [userNameField] = useState(userNameInput);
   const [passwordField] = useState(passwordInput);
   const [cancelLoginField, setCancelLogin] = useState(false);
   const [loginPetAge, setLoginPetAge]= useState(petAgeCharacter);
   const [loginPetFun, setLoginPetFun]= useState(petFunCharacter);
   const [loginPetUrl, setLoginPetUrl]= useState(petUrlImage);
   const [loginPetHungry, setLoginPetHungry]= useState(petHungryCharacter);
   const [loginPetColor, setLoginPetColor]= useState(petColorCharacter);
   const [loginPetHeart, setLoginPetHeart]= useState(petHeartCharacter);
   const [loginPetName, setLoginPetName]= useState(petNameCharacter);
   const [loginPetIsALive, setLoginPetIsALive] = useState(petIsALive);

   const [messageInfo, setMessageInfo] = useState<null | IMessage>(null);

   function petAgeToRecive() {
         setLoginPetAge()
   }

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
      setOnSumbitComplete(true);
   }

   const [onSubmitComplete, setOnSumbitComplete] = useState(false);

   function showMessage(message: IMessage) {
      setMessageInfo(message);
      setTimeout(() => {
         setMessageInfo(null);
      }, 2000);
   }

   function goToHomeClick() {
      setCancelLogin(true);
   }


   return (
      <div className="loginPage">
         <div className="userName">
            <label form="userName">User Name</label>
            <input type="text" className={ "completeBar" }>{ userNameInput }</input>
         </div>
         <div className="password">
            <label form={ "loginPassword" }>Password</label>
            <input type="password" className={ "completeBar" }>{ passwordInput }</input>
         </div>
         <div className={ "buttons" }>
            <button className={ "submitLogin" }
                    type={ "submit" }
                    onClick={ submitLoginInfo }>
               submit
               {
                  onSubmitComplete &&
                  <Screen petFun={loginPetFun} petAge={ loginPetAge} petHeart={loginPetHeart } petHungry={loginPetHungry } petName={loginPetName } urlDinosaur={loginPetUrl } petColor={ loginPetColor}
                          petIsAlive={loginPetIsALive }
                  /> }

            </button>
            <button onClick={ goToHomeClick }>
               Home
            </button>

            {
               cancelLoginField && <Home/>
            }
         </div>

      </div>
   );
}

interface IMessage {
   title: string,
   message;
   :
      string;
}


function Message({
   title, message;
}: IMessage) {
   return (
      <div>
         <h6>{ title }</h6>
         <p>{ message }</p>
      </div>
   );
}
