import {useEffect, useState} from "react";
import {ICharacterStorage, IUserRegister} from "./characterStorage.types.ts";

export const useCharacterStorage = () => {

   const [localStorageData, setLocalStorageData] = useState<null | IUserRegister[]>(null);

   useEffect(() => {
      loadLocalStorage();
   }, []);

   // Private
   function loadLocalStorage() {
      const data = window.localStorage.getItem("data");
      if (data) {
         const objectData = JSON.parse(data) as ICharacterStorage;
         setLocalStorageData(objectData.data);
      }
   }

   // Private
   function persistLocalStorage(persistState: boolean, dataToPersist: ICharacterStorage) {
      if (persistState) {
         const stringData = JSON.stringify(localStorageData);
         localStorage.setItem("data", stringData);
      } else {
         const stringData = JSON.stringify(dataToPersist);
         localStorage.setItem("data", stringData);
      }
   }

   function getDataFromUser(userName: string): IUserRegister | undefined {
      if (localStorageData) {
         return localStorageData.find((register) => register.userName.toLowerCase() === userName.toLowerCase());
      } else return undefined;
   }

   function saveUserData(userName: string, userData: IUserRegister): boolean {
      if (localStorageData) {
         setLocalStorageData(prev => {
            const temporal = structuredClone(prev);
            const foundIndex =
               temporal?.findIndex((register) => register.userName.toLowerCase() === userName.toLowerCase()) as number;
            if (foundIndex !== -1) {
               temporal![foundIndex] = userData;
               return temporal;
            } else return prev;
         });
         return true;
      } else return false;
   }

   function saveNewUser(userData: IUserRegister) {
      if (localStorageData) {
         setLocalStorageData((prev) => {
            const prevCopy = structuredClone(prev);
            prevCopy?.push(userData);
            return prevCopy;
         });
      } else {
         const userDataToSave: IUserRegister[] = [];
         userDataToSave.push(userData);
         const toSaveData: ICharacterStorage = {
            data: userDataToSave
         };
         persistLocalStorage(false, toSaveData);
         loadLocalStorage();
      }
   }


   return {
      getDataFromUser,
      saveUserData,
      saveNewUser
   };
};
