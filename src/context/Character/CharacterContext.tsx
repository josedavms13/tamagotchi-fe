import {createContext, ReactNode, useEffect, useState} from "react";
import {ICharacterContext} from "./characterContext.types.ts";


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const CharacterContext = createContext<ICharacterContext>(null);

export function CharacterProvider({children}: { children: ReactNode }) {
   const [hungry, setHungry] = useState(0);
   const [joy, setJoy] = useState(100);
   const [tiredness, setTiredness] = useState(0);
   const [health, setHealth] = useState(100);
   const [petName, setPetName] = useState("");
   const [isAlive, setIsAlive] = useState(true);

   function modifyHungry(newHungry?: number) {
      if (newHungry) {
         setHungry((prev) => {
            if (prev - newHungry > 0) {
               return prev - newHungry;
            } else {
               return 0;
            }
         });
      } else {
         setHungry((prev) => {
            if (prev - 1 > 0) {
               return prev - 1;
            } else {
               return 0;
            }
         });
      }
   }

   useEffect(() => {
      if (hungry <= 0 || health <= 0) {
         setIsAlive(false);
      }
   }, [hungry, health]);

   function modifyJoy(joy: number) {
      setJoy((prev) => {
         if (prev - joy > 0) {
            return prev - joy;
         } else {
            return 0;
         }
      });
   }


   function modifyTiredness(tiredness: number) {
      setTiredness((prev) => {
         if (prev - tiredness > 0) {
            return prev - tiredness;
         } else {
            return 0;
         }
      });
   }


   function modifyHealth(health: number) {
      setHealth((prev) => {
         if (prev - health > 0) {
            return prev - health;
         } else {
            return 0;
         }
      });
   }

   function modifyPetName(petName: string) {
      setPetName((prev) => {
         if (prev === "") {
            return petName;
         } else {
            return prev;
         }
      });
   }

   return (
      <CharacterContext.Provider value={ {
         petName,
         hungry,
         joy,
         tiredness,
         health,
         isAlive,
         modifyHungry,
         modifyJoy,
         modifyTiredness,
         modifyHealth,
         modifyPetName,
      } }>
         { children }
      </CharacterContext.Provider>
   );
}
