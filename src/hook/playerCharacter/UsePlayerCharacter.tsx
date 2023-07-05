import {useEffect, useState} from "react";
import {IUsePlayerCharacter} from "./usePlayerCharacterTypes.ts";


export function usePlayerCharacter({fun, age, heart, hungry, name, isAlive}: IUsePlayerCharacter) {
   const [isAliveCharacter, setIsAliveCharacter] = useState<boolean>(isAlive);
   const [funCharacter, setFunCharacter] = useState<number>(fun);
   const [heartCharacter, setHeartCharacter] = useState<number>(heart);
   const [hungryCharacter, setHungryCharacter] = useState<number>(hungry);
   const [ageCharacter, setAgeCharacter] = useState<number>(age);
   const [nameCharacter] = useState(name);

   const max_age = 120;

   // HEART
   useEffect(() => {
      setHeartCharacter((prev) => {
         if (prev - 1 > 0) {
            return prev - 1;
         }
         setIsAliveCharacter(false);
         return 0;
      });
   }, []);

   // FUN
   useEffect(() => {
      setInterval(() => {
         setFunCharacter((prev) => prev - 1);
      }, 90000);
   }, []);

   // HUNGRY
   useEffect(() => {
      setInterval(() => {
         setHungryCharacter((prev) => prev + 1);
      }, 60000);
   }, []);

   // AGE
   useEffect(() => {
      setInterval(() => {
         setAgeCharacter((prev) => {
            if (prev + 1 > max_age) {
               return prev + 1;
            }
            setIsAliveCharacter(false);
            setHeartCharacter(0);
            return prev;
         });
      }, 70000);
   }, []);

   function happinessModify(happinessAmount: number) {
      if (happinessAmount < 10) {
         return setFunCharacter((prev) => prev + happinessAmount);
      }
   }

   function feed(amount: number) {
      return setHungryCharacter(hungryCharacter - amount);
   }

   function dead() {
      setHeartCharacter(0);
      setIsAliveCharacter(false);
   }

   function heal(healAmount: number) {
      if (!isAliveCharacter) {
         return;
      }
      setHeartCharacter((prev) => {
         if (prev + healAmount > healAmount) {
            return prev + healAmount;
         }
         return 100;
      });
   }

   return {
      ageCharacter,
      hungryCharacter,
      funCharacter,
      heartCharacter,
      isAliveCharacter,
      nameCharacter,
      feed,
      happinessModify,
      dead,
      heal
   };
}
