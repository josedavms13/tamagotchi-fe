import {useState} from "react";

export const useLogin = () => {

   const [isAuth, setIsAuth] = useState(false);

   function login(username: string, password: string) {
      // HTTP request
      doLoginCall(username, password)
         .then(data => setIsAuth(data.data));
      //ok
      setIsAuth(true);
      //
      setIsAuth(false);
   }

   function doLoginCall(userName: string, password: string): Promise<{ data: boolean }> {
      return new Promise((resolve, reject) => {
         const stringUser = localStorage.getItem("user");
         if (!stringUser) {
            reject({data: false});
         }
         const user = JSON.parse(stringUser!);
         if (user.password === password) {
            resolve({data: true});
         } else {
            reject({data: false});
         }
      });
   }

   return {login, isAuth};
};
