import {useEffect, useState} from "react";
import {ITicTacPlayer, IUseTicTac} from "./useTicTac.types.ts";
import {ITicTacFieldData, tFieldData} from "../tikTakToeTypes.ts";
import {IMessage} from "../../../message/message.types.ts";


export const useTicTacToe = ({petName}: IUseTicTac) => {

   //region Game engine
   const [fields, setFields] = useState(initialFieldsState);
   const [message, setMessage] = useState<null | IMessage>(null);
   const [isPlayerLocked, setIsPlayerLocked] = useState(false);
   const [currentTurn, setCurrentTurn] = useState(0);

   // Private
   function showError(message: IMessage, timeOut?: number) {
      setMessage(message);
      setTimeout(() => {
         setMessage(null);
      }, timeOut ? timeOut : 1500);
   }

   function doMove(fieldId: number) {
      console.log(`Doing move ${ fieldId }`);
      if (fieldId < 0) {
         showError({
            title: "Invalid movement",
            message: "Field id must be positive"
         });
         return;
      }
      if (fieldId >= fields.length) {
         showError({
            title: "Field selected out of bound",
            message: "Select a valid field"
         });
         return;
      }
      if (!isPlayerLocked) {
         setFields((prev) => {
            const foundField = prev.findIndex((field) => field.index === fieldId);
            if (prev[foundField].isLocked) {
               return prev;
            } else {
               const prevCopy = [...prev];
               prevCopy[foundField].fieldData = "X";
               prevCopy[foundField].isLocked = true;
               return prevCopy;
            }
         });
      }
   }

   return {
      message,
      doMove,
      fields,

   };
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
