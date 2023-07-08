import {PlayerColor} from "../playerCharacter/usePlayerCharacterTypes.ts";
import {useState} from "react";

export const useRegister = () => {

   const [isRegistered, setIsRegistered] = useState(false);

   function doRegister(username: string, password: string, petName: string, dinoColor: PlayerColor) {
      doRegisterCall(username, password, petName, dinoColor)
         .then((data) => {
            setIsRegistered(data.data);
         });
   }

   function doRegisterCall(username: string, password: string, petName: string, dinoColor: PlayerColor): Promise<{ data: boolean }> {
      return new Promise((resolve, reject) => {
         const storage = {
            username, password, petName, dinoColor
         };
         const localStorageUsers = localStorage.getItem("users");
         const itemToCreate = localStorageUsers ? JSON.parse(localStorageUsers) : [];
         itemToCreate.push(storage);
         window.localStorage.setItem("users", JSON.stringify(itemToCreate));
         setTimeout(() => {
            resolve({data: true});
         });
      });
   }

   return {doRegister, isRegistered};
};
