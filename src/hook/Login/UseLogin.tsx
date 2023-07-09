import {useState} from "react";
import {IUser} from "./login.types.ts";
import {useUserStorage} from "../UserStorage/UseUserStorage.tsx";

export const useLogin = () => {

   const {getUser} = useUserStorage();
   const [isAuth, setIsAuth] = useState(false);
   const [user, setUser] = useState<null | IUser>(null);

   function doLogin(username: string, password: string) {
      // HTTP request
      doLoginCall(username, password)
         .then(data => {
            setIsAuth(true);
            setUser(data.data);
         })
         .catch(error => {
            console.log(error);
         });
   }

   async function doLoginCall(userName: string, password: string): Promise<{ data: IUser }> {
      const foundUser = await getUser(userName);
      return new Promise((resolve, reject) => {
         setTimeout(() => {
            if (!foundUser) {
               reject("User not found");
               return;
            }
            if (foundUser.password !== password) {
               reject("Wrong password");
               return;
            }
            resolve({data: foundUser});
         }, 200);
      });
   }

   return {doLogin, isAuth, user};
};
