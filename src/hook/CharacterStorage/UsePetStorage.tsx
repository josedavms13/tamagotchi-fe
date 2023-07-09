import {useEffect} from "react";
import {IPetInfo} from "./characterStorage.types.ts";

export const usePetStorage = () => {

   useEffect(() => {
      const petStorage = localStorage.getItem("pets");
      if (petStorage === null) {
         localStorage.setItem("pets", JSON.stringify([]));
      }
   }, []);

   // Private
   function getPetStorage(): IPetInfo[] {
      const stringedPets = localStorage.getItem("pets");
      if (stringedPets) {
         return JSON.parse(stringedPets);
      } else return [];
   }

   // Private
   function retreivePetByUserName(userName: string): IPetInfo | undefined {
      return getPetStorage().find((pet) => pet.userName === userName);
   }

   // Private
   function registerNewPet(petInfo: IPetInfo) {
      const existingPets = getPetStorage();
      existingPets.push(petInfo);
      localStorage.setItem("pets", JSON.stringify(existingPets));
   }

   async function getPetByUserName(userName: string): Promise<IPetInfo> {
      return new Promise((resolve, reject) => {
         const foundPet = retreivePetByUserName(userName);
         setTimeout(() => {
            if (foundPet) {
               resolve(foundPet);
            } else {
               reject(`Not pet found by user ${ userName }`);
            }
         }, 200);
      });
   }

   async function createNewPet(petInfo: IPetInfo): Promise<IPetInfo> {
      return new Promise((resolve, reject) => {
         const foundPet = retreivePetByUserName(petInfo.userName);
         setTimeout(() => {
            if (foundPet) {
               reject(`There is a pet registered with userName ${ petInfo.userName }`);
            } else {
               registerNewPet(petInfo);
               resolve(petInfo);
            }
         }, 200);
      });
   }

   return {
      getPetByUserName,
      createNewPet,
   };
};
