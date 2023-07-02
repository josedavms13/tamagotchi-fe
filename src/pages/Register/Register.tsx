import {IMessage, IResgisterTypes} from "./resgisterTypes.ts";
import "./resgisterStyles.css";
import {useState} from "react";
import {Home} from "../home/Home.tsx";

export function Register({username, password, petName, petColor, onUserRegister}: IResgisterTypes) {

   const [userNameField, setUserNameField] = useState(username);
   const [passwordField, setPasswordField] = useState(password);
   const [petNameField, setPetNameField] = useState(petName);
   const [colorField, setColorField] = useState(petColor);
   const [goToHome, setGoToHome] = useState(false);


   const [messageInfo, setMessageInfo] = useState<null | IMessage>(null);


   function verifyAndSubmit() {
      // Si cumle con tada
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
      if (!petNameField || petNameField.length < 1) {
         showMessage(({
            title: "Pet name must be provided",
            message: "Pet name is empty"
         }));
         return;
      }
      if(colorField===undefined){

         showMessage(({
            title: "Pet color must be provided",
            message: "Pet color is empty"
         }));
         return;
      }

      onUserRegister(userNameField, passwordField, colorField, petNameField );
   }

   function showMessage(message: IMessage) {
      setMessageInfo(message);
      setTimeout(() => {
         setMessageInfo(null);
      }, 2000);
   }

   function goBackToHomeClick() {
      setGoToHome(true);
   }
   return <div className="register">
      <div className="infoSpace">
         <label form="userName">UserName</label>
         <input
            type="text"
            id={ "userName" }
            className={ "userName" }
            onChange={ (event) => setUserNameField(event.target.value) }
         />
      </div>
      <div className="infoSpace">
         <label form="password">Password</label>
         <input type="password"
            className={ "password" }
            onChange={ (event) => setPasswordField(event.target.value) }
         />
      </div>
      <div className="infoSpace">
         <label form="petName">PetName</label>
         <input type="text"
            className={ "petName" }
            onChange={ (event) => setPetNameField(event.target.value) }
         />
      </div>
      <div className="petColor">
         <input type="color" list="colors" onChange={(event)=>setColorField(event.target.list)}/>
         <datalist id="colors">
            <option id={"blue"}> #0000FF</option>
            <option id={"red"}> #FF0000</option>
            <option id={"yellow"}> #FF6600</option>
            <option id={"green"}> #008000</option>
         </datalist>
      </div>
      <div className="button">
         <button type="submit" onClick={verifyAndSubmit}>Submit</button>
         <button onClick={goBackToHomeClick}>Home</button>
      </div>
      {
         messageInfo && <Message title={messageInfo.title} message={messageInfo.message}/>
      }

      {
         goToHome && <Home/>
      }
   </div>;
}

function Message({title, message}: IMessage) {
   return (
      <div>
         <h6>{ title }</h6>
         <p>{ message }</p>
      </div>
   );
}
