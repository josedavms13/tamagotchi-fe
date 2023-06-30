import {IResgisterTypes} from "./resgisterTypes.ts";
import "./resgisterStyles.css"
import {useState} from "react";
import {LoginPage} from "../login/LoginPage.tsx";

export function Register({username, password, petName, perColor}: IResgisterTypes) {

   const [loginClick, setLoginClick] = useState(false)
   function onLoginClick() {
      setLoginClick(true)
   }

   return(
      <div className="register">
         <div className="infoSpace">
            <label form="userName">UserName</label>
            <input type="text">{username}</input>
         </div>
         <div className="infoSpace">
            <label form="password">Password</label>
            <input type="password">{password}</input>
         </div>
         <div className="infoSpace">
            <label form="petName">PetName</label>
            <input type="text">{petName}</input>
         </div>
         <div className="petColor">
            <input type="color" list="colors">{perColor}</input>
            <datalist id="colors">
               <option> #0000FF</option>
               <option> #FF0000</option>
               <option> #FF6600</option>
               <option> #008000</option>
            </datalist>
         </div>
         <div className="button">
            <button type="submit">Submit</button>
            <button onClick={onLoginClick}>Login
               {loginClick && <LoginPage userName={null} password={null}/>}
            </button>
         </div>

      </div>
   )
}
