import {ILoginPageTypes} from "./loginPageTypes.ts";
import "./loginPageStyles.css"

export function LoginPage({userName, password}:ILoginPageTypes) {
   return (
      <div className="loginPage">
         <div className="userName">
            <label form="userName">userName</label>
            <input type="text">{userName}</input>
         </div>
         <div className="password">
            <label form={"loginPassword"}>Password</label>
            <input type="password">{password}</input>
         </div>
         <button className={"submitLogin"} type={"submit"}>submit</button>
      </div>
   )
}
