import {useState} from "react";
import {IUser} from "./login.types.ts";

export const useLogin = () => {

   const [isAuth, setIsAuth] = useState(false);

   function doLogin(username: string, password: string) {
      // HTTP request
      doLoginCall(username, password)
         .then(data => setIsAuth(data.data))
         .catch(error => {
            console.log(error);
         });
   }

   function doLoginCall(userName: string, password: string): Promise<{ data: boolean }> {
      return new Promise((resolve, reject) => {
         const stringUser = localStorage.getItem("users");
         if (!stringUser) {

            reject({data: false, message: "user is empty"});
         }
         // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
         const users = JSON.parse(stringUser!) as IUser[];
         const foundUser = users.find((user) => user.username === userName);
         if (!foundUser) {
            reject({data: false, message: "User not found"});
            return;
         }
         if (foundUser.password === password) {
            resolve({data: true});
         } else {
            reject({data: false, message: "User not match with NASA Database"});
         }
      });
   }

   return {doLogin, isAuth};
};
