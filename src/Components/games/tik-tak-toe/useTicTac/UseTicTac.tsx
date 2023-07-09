import {useEffect, useState} from "react";
import {ITicTacPlayer, IUseTicTac} from "./useTicTac.types.ts";
import {ITicTacFieldData, tFieldData} from "../tikTakToeTypes.ts";


export const useTicTacToe = ({userName}: IUseTicTac) => {

   //region Game engine
   const [fields, setFields] = useState(initialFieldsState);
   const [error, setError] = useState<null | string>(null);
   const [isPlayerLocked, setIsPlayerLocked] = useState(false);
   const [turnPlayerIndex, setTurnPlayerIndex] = useState(0);
   const [players] = useState<ITicTacPlayer[]>([
      {
         id: "0",
         userName: userName,
         cameCharacter: "X"
      },
      {
         id: "1",
         userName: getIaName(),
         cameCharacter: "IA"
      },
   ]);


   function changeTurns(): void {

      setTurnPlayerIndex((prev) => {
         if (prev + 1 < players.length) {
            return prev + 1;
         } else {
            return 0;
         }
      }
      );
   }

   useEffect(() => {
      console.log(turnPlayerIndex);
   }, [turnPlayerIndex]);

   function showError(error: string): void {
      setError(error);
      setTimeout(() => {
         setError(null);
      }, 1000);
   }

   function doMove(turnPlayerIndex: number, fieldIndex: number, gameCharacter: tFieldData): void {
      markField(fieldIndex, gameCharacter);
      changeTurns();
      console.log({turnPlayerIndex});

   }

   useEffect(() => {
      if (turnPlayerIndex !== 0) {
         iAMove();
         setIsPlayerLocked(true);

      } else {
         setIsPlayerLocked(false);
      }
   }, [turnPlayerIndex]);

   function markField(fieldId: number, gameCharacter: tFieldData) {
      if (fieldId < 0 || fieldId > fields.length) {
         showError("fieldId incorrect");
         return;
      }

      const fieldIndex = fields.findIndex((field) => field.index === fieldId);
      const fieldCopy = structuredClone(fields);
      fieldCopy[fieldIndex].fieldData = gameCharacter;
      fieldCopy[fieldIndex].isLocked = true;
      setFields(fieldCopy);
   }

   useEffect(() => {
      console.log({turnPlayerIndex});
   }, [turnPlayerIndex]);

   function getIaName(): string {
      const randomIndex = Math.floor(Math.random() * possibleIaNames.length);
      return possibleIaNames[randomIndex];
   }

   //endregion Game engine

   function iAMove() {
      const fieldsCopy = structuredClone(fields);
      const unlockedFields = fieldsCopy.filter((field) => !field.isLocked);
      const randomPick = Math.floor(Math.random() * unlockedFields.length);
      console.log("IA move", {unlockedFields});
      doMove(1, randomPick, "IA");

   }

   function playerMove(fieldIndex: number): void {
      if (!isPlayerLocked) {
         doMove(0, fieldIndex, "X");

      }
   }

   return {playerMove, fields, error};
};


const possibleIaNames = ["tribe", "place", "drive", "where", "trouble"];

const initialFieldsState: ITicTacFieldData[] = [
   {
      fieldData: "",
      isLocked: false,
      index: 0,
   }, {
      fieldData: "",
      isLocked: false,
      index: 1,
   }, {
      fieldData: "",
      isLocked: false,
      index: 2,
   }, {
      fieldData: "",
      isLocked: false,
      index: 3,
   }, {
      fieldData: "",
      isLocked: false,
      index: 4,
   }, {
      fieldData: "",
      isLocked: false,
      index: 5,
   }, {
      fieldData: "",
      isLocked: false,
      index: 6,
   }, {
      fieldData: "",
      isLocked: false,
      index: 7,
   }, {
      fieldData: "",
      isLocked: false,
      index: 8,
   },
];
