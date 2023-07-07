import {PlayerColor} from "../playerCharacter/usePlayerCharacterTypes.ts";
import {useState} from "react";

export const useRegister = () => {

   const [isRegistered, setIsRegistered] = useState(false);

   function doRegister(username: string, password: string, dinoColor: PlayerColor) {
      doRegisterCall(username, password, dinoColor)
         .then((data) => {
            setIsRegistered(data.data);
         });
   }

   function doRegisterCall(username: string, password: string, dinoColor: PlayerColor): Promise<{ data: boolean }> {
      return new Promise((resolve, reject) => {
         const storage = {
            username, password, dinoColor
         };
         window.localStorage.setItem("user", JSON.stringify(storage));
         setTimeout(() => {
            resolve({data: true});
         });
      });
   }

   return {doRegister, isRegistered};
};
