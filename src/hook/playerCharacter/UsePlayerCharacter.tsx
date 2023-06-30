import {useRef, useState} from "react";
import {IUsePlayerCharacter} from "./usePlayerCharacterTypes.ts";

export function usePlayerCharacter({fun, age, heart, hungry, name, dinosaur, color}:IUsePlayerCharacter) {
   const [funCharacter, setFunCharacter] = useState<number>(fun)
   const [heartCharacer, setHeartCharacter] = useState<number>(heart)
   const [hungryCharacter, setHungryCharacter] = useState<number>(hungry)
   const [dinosaurCharacter, setDinosaurCharacter] = useState<string>(dinosaur)
   const ageCharacter= useRef<number>(age)
   const nameCharacter= useRef<string>(name)
   const colorCharacter= useRef<string>(color)
}
