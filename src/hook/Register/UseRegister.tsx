import {useState} from "react";
import {useUserStorage} from "../UserStorage/UseUserStorage.tsx";
import {usePetStorage} from "../CharacterStorage/UsePetStorage.tsx";
import {IPetInfo} from "../CharacterStorage/characterStorage.types.ts";
import {IUser} from "../Login/login.types.ts";

export const useRegister = () => {

   const {createNewUser} = useUserStorage();
   const {createNewPet} = usePetStorage();

   const [isRegistered, setIsRegistered] = useState(false);

   function doRegister(user: IUser, dino: IPetInfo) {
      doRegisterCall(user, dino)
         .then((data) => {
            setIsRegistered(data.data);
         });
   }

   async function doRegisterCall(user: IUser, dino: IPetInfo): Promise<{ data: boolean }> {
      try {
         await createNewUser(user);
         const petToCreate: IPetInfo = {
            userName: user.username,
            petAge: dino.petAge,
            petFun: dino.petFun,
            petHeart: dino.petHeart,
            petHungry: dino.petHungry,
            petColor: dino.petColor,
            petName: dino.petName,
            petIsAlive: dino.petIsAlive
         };
         await createNewPet(petToCreate);
         return {data: true};
      } catch (e) {
         return {data: false};
      }
   }
   return {doRegister, isRegistered};
};
