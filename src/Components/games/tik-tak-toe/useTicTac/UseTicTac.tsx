import {useEffect, useRef, useState} from "react";
import {IUseTicTac} from "./useTicTac.types.ts";
import {ITicTacFieldData, tFieldData} from "../tikTakToeTypes.ts";
import {IMessage} from "../../../message/message.types.ts";


export const useTicTacToe = ({petName, onWin, onLose}: IUseTicTac) => {

   //region Game engine
   const [fields, setFields] = useState(initialFieldsState);
   const [message, setMessage] = useState<null | IMessage>(null);
   const [currentTurn, setCurrentTurn] = useState<0 | 1>(0);
   const [currentPlayer, setCurrentPlayer] = useState(petName);
   const iaName = useRef("IA: " + getIaName());
   const [isIAThinking, setIsIAThinking] = useState(false);
   const markedFields = useRef(0);

   // Private
   function showError(message: IMessage, timeOut?: number) {
      setMessage(message);
      setTimeout(() => {
         setMessage(null);
      }, timeOut ? timeOut : 1500);
   }

   // Private
   function doMove(fieldId: number, playerMark: tFieldData): boolean {
      console.log(`Doing move ${ fieldId }`);
      if (fieldId < 0) {
         showError({
            title: "Invalid movement",
            message: "Field id must be positive"
         });
         return false;
      }
      if (fieldId >= fields.length) {
         showError({
            title: "Field selected out of bound",
            message: "Select a valid field"
         });
         return false;
      }
      setFields((prev) => {
         const foundField = prev.findIndex((field) => field.index === fieldId);
         if (prev[foundField].isLocked) {
            console.log(`Field ${ prev[foundField].index } is locked: ${ prev[foundField].isLocked }`);
            return prev;
         } else {
            const prevCopy = [...prev];
            prevCopy[foundField].fieldData = playerMark;
            prevCopy[foundField].isLocked = true;
            return prevCopy;
         }
      });
      markedFields.current = markedFields.current + 1;
      return true;
   }

   // Manage turn change
   useEffect(() => {
      if (currentTurn === 0) {
         setCurrentPlayer(petName.toUpperCase());
      } else {
         setCurrentPlayer(iaName.current);
      }
   }, [currentTurn, petName]);


   // Private
   function changeTurn() {
      setCurrentTurn((prev) => {
         if (prev === 0) {
            return 1;
         } else return 0;
      });
   }

   useEffect(() => {
      console.log(markedFields);
   }, [markedFields]);


   // Private
   function doIaMove() {
      setIsIAThinking(true);
      setTimeout(() => {
         setFields((prev) => {
            const filtered = prev.filter((field) => !field.isLocked);
            const randomIndexFound = Math.floor(Math.random() * filtered.length - 1);
            console.log(filtered);
            console.log(randomIndexFound);
            const prevCopy = structuredClone(prev);
            if (randomIndexFound !== -1) {
               prevCopy[filtered[randomIndexFound].index - 1].isLocked = true;
               prevCopy[filtered[randomIndexFound].index - 1].fieldData = "IA";
            }
            return prevCopy;
         });
         markedFields.current = markedFields.current + 1;
         setIsIAThinking(false);
         changeTurn();
      }, getRandomTime());

   }

   // Private
   function getRandomTime(): number {
      return Math.floor(Math.random()) * 3000 + 3000;
   }

   // Verify Win Condition
   useEffect(() => {


      const winConditionH1 = [0, 1, 2];
      const winConditionH2 = [3, 4, 5];
      const winConditionH3 = [6, 7, 8];

      const winConditionV1 = [0, 3, 6];
      const winConditionV2 = [1, 4, 7];
      const winConditionV3 = [2, 5, 8];

      const winConditionX1 = [0, 4, 8];
      const winConditionX2 = [2, 4, 6];

      console.log(fields[winConditionH1[0]]);
      console.log(fields[winConditionH1[1]]);
      console.log(fields[winConditionH1[2]]);

      let isPlayerH1 = true;
      let isPlayerH2 = true;
      let isPlayerH3 = true;

      let isPlayerV1 = true;
      let isPlayerV2 = true;
      let isPlayerV3 = true;

      let isPlayerX1 = true;
      let isPlayerX2 = true;

      let isIAH1 = true;
      let isIAH2 = true;
      let isIAH3 = true;

      let isIAV1 = true;
      let isIAV2 = true;
      let isIAV3 = true;

      let isIAX1 = true;
      let isIAX2 = true;

      for (let i = 0; i < 3; i++) {
         //region Player Win
         // Horizontal
         if (fields[winConditionH1[i]].fieldData !== "X") {
            isPlayerH1 = false;
         }
         if (fields[winConditionH2[i]].fieldData !== "X") {
            isPlayerH2 = false;
         }
         if (fields[winConditionH3[i]].fieldData !== "X") {
            isPlayerH3 = false;
         }
         // Vertical
         if (fields[winConditionV1[i]].fieldData !== "X") {
            isPlayerV1 = false;
         }
         if (fields[winConditionV2[i]].fieldData !== "X") {
            isPlayerV2 = false;
         }
         if (fields[winConditionV3[i]].fieldData !== "X") {
            isPlayerV3 = false;
         }
         // X condition
         if (fields[winConditionX1[i]].fieldData !== "X") {
            isPlayerX1 = false;
         }
         if (fields[winConditionX2[i]].fieldData !== "X") {
            isPlayerX2 = false;
         }
         //endregion Player Win

         //region IA win
         // Horizontal
         if (fields[winConditionH1[i]].fieldData !== "IA") {
            isIAH1 = false;
         }
         if (fields[winConditionH2[i]].fieldData !== "IA") {
            isIAH2 = false;
         }
         if (fields[winConditionH3[i]].fieldData !== "IA") {
            isIAH3 = false;
         }
         // Vertical
         if (fields[winConditionV1[i]].fieldData !== "IA") {
            isIAV1 = false;
         }
         if (fields[winConditionV2[i]].fieldData !== "IA") {
            isIAV2 = false;
         }
         if (fields[winConditionV3[i]].fieldData !== "IA") {
            isIAV3 = false;
         }
         // X condition
         if (fields[winConditionX1[i]].fieldData !== "IA") {
            isIAX1 = false;
         }
         if (fields[winConditionX2[i]].fieldData !== "IA") {
            isIAX2 = false;
         }
         //endregion IA Win
      }

      if (isPlayerH1 ||
         isPlayerH2 ||
         isPlayerH3 ||
         isPlayerV1 ||
         isPlayerV2 ||
         isPlayerV3 ||
         isPlayerX1 ||
         isPlayerX2) {
         console.log("Player Won");
         onWin();
         return;
      }

      if (
         isIAH1 ||
         isIAH2 ||
         isIAH3 ||
         isIAV1 ||
         isIAV2 ||
         isIAV3 ||
         isIAX1 ||
         isIAX2
      ) {
         onLose();
         return;
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [fields]);

   function doPlayerMove(fieldId: number) {
      if (doMove(fieldId, "X")) {
         changeTurn();
         doIaMove();
      }
   }

   return {
      message,
      isIAThinking,
      doPlayerMove,
      fields,
      currentPlayer
   };
};

const possibleIaNames = ["tribe", "place", "drive", "where", "trouble"];

function getIaName(): string {
   const random = Math.floor(Math.random() * possibleIaNames.length - 1);
   return possibleIaNames[random];
}

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
