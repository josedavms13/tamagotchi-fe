import {useEffect, useState} from "react";
import {ITicTacPlayer, IUseTicTac} from "./useTicTac.types.ts";
import {ITicTacFieldData} from "../tikTakToeTypes.ts";


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
      }
   ]);

   useEffect(() => {
      console.log(`Turn ${ turnPlayerIndex }`);
      setIsPlayerLocked(turnPlayerIndex !== 0);
   }, [turnPlayerIndex]);


   function changeTurns(): void {
      setTurnPlayerIndex((pev) => {
         if (pev === players.length - 1) {
            return 0;
         } else {
            return pev + 1;
         }
      });
   }

   function showError(error: string): void {
      setError(error);
      setTimeout(() => {
         setError(null);
      }, 1000);
   }

   function doMove(playerId: string, fieldId: number): void {
      console.log(`Move from player ${ playerId } to field ${ fieldId }`);
      if (fieldId < 0 || fieldId > fields.length) {
         showError("Field id is out of range");
         return;
      }
      const foundPlayerIndex = players.findIndex((player) => player.id === playerId);
      if (foundPlayerIndex === -1) {
         showError("Player not found");
         return;
      }
      const fieldsCopy = structuredClone(fields);
      const foundField = fieldsCopy.findIndex((field) => field.index === fieldId);
      if (!fieldsCopy[foundField].isLocked) {
         fieldsCopy[foundField].fieldData = players[turnPlayerIndex].cameCharacter;
         fieldsCopy[foundField].isLocked = true;
         setFields(fieldsCopy);
         changeTurns();
      }
   }

   function getIaName(): string {
      const randomIndex = Math.floor(Math.random() * possibleIaNames.length);
      return possibleIaNames[randomIndex];
   }

   //endregion Game engine

   function iAMove() {
      const fieldsCopy = structuredClone(fields);
      const unlockedFields = fieldsCopy.filter((field) => !field.isLocked);
      const randomPick = Math.floor(Math.random() * unlockedFields.length);
      doMove("1", randomPick);
   }

   function playerMove(fieldIndex: number): void {
      if (!isPlayerLocked) {
         doMove("0", fieldIndex);
         iAMove();
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
