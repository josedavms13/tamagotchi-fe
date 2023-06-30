import {ILoginPageTypes} from "./loginPageTypes.ts";
import "./loginPageStyles.css";
import {useState} from "react";
import {Home} from "../home/Home.tsx";

export function LoginPage({userName, password}: ILoginPageTypes) {
   const [homeButtonOn, setHomeButtonOn] = useState(false);

   function onHomeClick() {
      setHomeButtonOn(true);
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
            <button className={ "submitLogin" } type={ "submit" }>submit</button>
            <button onClick={ onHomeClick }> Home
               {
                  homeButtonOn && <Home/>
               }
            </button>
         </div>

      </div>
   );
}
