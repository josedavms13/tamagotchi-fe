import {useEffect, useRef, useState} from "react";
import {IUsePlayerCharacter} from "./usePlayerCharacterTypes.ts";


export function usePlayerCharacter({fun, age, heart, hungry, name, dinosaur, color, isAlive}:IUsePlayerCharacter) {
   const [isAliveCharacter, setIsAliveCharacter] = useState<boolean>(isAlive);
   const [funCharacter, setFunCharacter] = useState<number>(fun);
   const [heartCharacter, setHeartCharacter] = useState<number>(heart);
   const [hungryCharacter, setHungryCharacter] = useState<number>(hungry);
   const dinosaurCharacter = useRef<string>(dinosaur);
   const ageCharacter= useRef<number>(age);
   const nameCharacter= useRef<string>(name);
   const colorCharacter= useRef<string>(color);

   const max_age = 120;
   const posibleColor = ["green", "yellow", "red", "blue"];
   const urlDinosaur= "../../assets/sprites/dinocharacters/gifs/DinoSprites_";

   useEffect(()=>{
      setInterval(()=>{
         ageCharacter.current= ageCharacter.current + 1;
      },90000);
   },[ageCharacter]);

   useEffect(()=>{


      setInterval(()=>{
         setHungryCharacter((prev)=> prev + 1);
      }, 60000);
   }, []);

   useEffect(()=>{
      setInterval(()=>{
         setFunCharacter( funCharacter - 2);
      },70000);
   },[funCharacter]);

   function happinessModify(happinessAmount:number) {
      if(happinessAmount<10){
         return setFunCharacter( (prev)=> prev + happinessAmount);}
   }
   function feed(feedAmmont:number) {
      return setHungryCharacter(hungryCharacter - feedAmmont);
   }

   function dead() {
      if(ageCharacter.current===max_age ||funCharacter===0){
         setHeartCharacter(0);
         setIsAliveCharacter(false);
      }
   }

   function toName(name:string) {
      return nameCharacter.current=name;
   }

   function toColorSelect(color:string) {
      if(posibleColor.includes(color)){
         colorCharacter.current=color;
         dinosaurCharacter.current= urlDinosaur + color;
      }
      return ({colorCharacter, dinosaurCharacter});

   }




   return{
      ageCharacter,
      hungryCharacter,
      funCharacter,
      heartCharacter,
      dinosaurCharacter,
      isAliveCharacter,
      feed,
      happinessModify,
      dead,
      toName,
      toColorSelect

   };

}



