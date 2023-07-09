import {IUser} from "../Login/login.types.ts";
import {useEffect} from "react";

export const useUserStorage = () => {

   useEffect(() => {
      const userStorage = localStorage.getItem("users");
      if (userStorage === null) {
         localStorage.setItem("users", JSON.stringify([]));
      }
   }, []);


   // Private
   function getUserStorage(): IUser[] {
      const stringedUsers = localStorage.getItem("users");
      if (stringedUsers) {
         return JSON.parse(stringedUsers) as IUser[];
      } else return [];
   }

   // Private
   function getUserByUsername(username: string): IUser | undefined {
      return getUserStorage().find((user) => user.username === username);
   }

   // Private
   function registerNewUser(username: string, password: string) {
      const existingUsers = getUserStorage();
      existingUsers.push({
         username, password
      });
      localStorage.setItem("users", JSON.stringify(existingUsers));
   }

   async function getUser(username: string): Promise<IUser | undefined> {
      return new Promise<IUser>((resolve, reject) => {
         const foundUser = getUserByUsername(username);
         setTimeout(() => {
            if (foundUser) {
               resolve(foundUser);
            } else {
               reject("User not found");
            }
         }, 200);
      });
   }

   async function createNewUser({username, password}: IUser): Promise<IUser> {
      return new Promise((resolve, reject) => {
         const foundUser = getUserByUsername(username);
         setTimeout(() => {
            if (foundUser) {
               reject("User already exists already");
            } else {
               registerNewUser(username, password);
               resolve({
                  username,
                  password
               });
            }
         }, 200);
      });
   }

   return {
      getUser,
      createNewUser,
   };
};
