import "./resgisterStyles.css";
import {useEffect, useState} from "react";
import greenDinosaur from "../../assets/sprites/dinocharacters/gifs/DinoSprites_green.gif";
import yellowDinosaur from "../../assets/sprites/dinocharacters/gifs/DinoSprites_yellow.gif";
import blueDinosaur from "../../assets/sprites/dinocharacters/gifs/DinoSprites_blue.gif";
import redDinosaur from "../../assets/sprites/dinocharacters/gifs/DinoSprites_red.gif";
import {PlayerColor} from "../../hook/playerCharacter/usePlayerCharacterTypes.ts";
import {Message} from "../../Components/message/Message.tsx";
import {IMessage} from "../../Components/message/message.types.ts";
import {IRegisterTypes} from "./resgisterTypes.ts";

export function Register({onUserRegister, onRegisterCancel}: IRegisterTypes) {

   const [userNameField, setUserNameField] = useState("");
   const [passwordField, setPasswordField] = useState("");
   const [rePasswordField, setRePasswordField] = useState("");
   const [petNameField, setPetNameField] = useState("");
   const [playerDinoColor, setPlayerDinoColor] = useState<null | PlayerColor>(null);


   const [messageInfo, setMessageInfo] = useState<null | IMessage>(null);


   function verifyAndSubmit() {
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

      if (!rePasswordField || rePasswordField.length < 1) {
         showMessage(({
            title: "You must confirm your password",
            message: "Password confirmation is empty"
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

      if (passwordField !== rePasswordField) {
         showMessage({
            title: "Password and confirmation don't match",
            message: "Password and confirmation must be equal"
         });
         return;
      }

      if (!playerDinoColor) {
         showMessage({
            title: "Non dinosaur picked",
            message: "Must select one"
         });
         return;
      }

      onUserRegister(userNameField, passwordField, petNameField, playerDinoColor);
   }

   function showMessage(message: IMessage) {
      setMessageInfo(message);
      setTimeout(() => {
         setMessageInfo(null);
      }, 2000);
   }

   function goBackToHomeClick() {
      onRegisterCancel();
   }

   function pickDinosaur(dinoColor: "green" | "red" | "yellow" | "blue") {
      switch (dinoColor) {
      case "blue":
         setPlayerDinoColor(PlayerColor.BLUE);
         break;
      case "green":
         setPlayerDinoColor(PlayerColor.GREEN);
         break;
      case "yellow":
         setPlayerDinoColor(PlayerColor.YELLOW);
         break;
      case "red":
         setPlayerDinoColor(PlayerColor.RED);
         break;
      }
   }

   useEffect(() => {
      console.log(playerDinoColor);
   }, [playerDinoColor]);


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
         <label form="re-password">Repeat your password</label>
         <input type="password"
            className={ "password" }
            onChange={ (event) => setRePasswordField(event.target.value) }
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
         <span>Pick your dino color</span>
         <div className="pet-color-picker-container">
            <div onClick={ () => pickDinosaur("blue") } className="dino-color">
               <img src={ blueDinosaur } alt="blue dinosaur"/>
            </div>
            <div onClick={ () => pickDinosaur("red") } className="dino-color">
               <img src={ redDinosaur } alt="red dinosaur"/>
            </div>
            <div onClick={ () => pickDinosaur("yellow") } className="dino-color">
               <img src={ yellowDinosaur } alt="yellow dinosaur"/>
            </div>
            <div onClick={ () => pickDinosaur("green") } className="dino-color">
               <img src={ greenDinosaur } alt="green dinosaur"/>
            </div>
         </div>
      </div>
      <div className="button">
         <button type="submit" onClick={ verifyAndSubmit }>Submit</button>
         <button onClick={ goBackToHomeClick }>Home</button>
      </div>
      {
         messageInfo && <Message title={ messageInfo.title } message={ messageInfo.message }/>
      }
   </div>;
}

