import {ICloudTypes} from "./cloudTypes.ts";
import {useState} from "react";
import "../../../assets"

export function Cloud({speedMove, id}:ICloudTypes) {

   const cloud [cloudArray, setCloudArray] = useState<ICloudTypes[]>([{speedMove:0, id:1, url:"./"}])


   return(
      <div className={"cloud"}>
         <img src={""} alt={}></img>
      </div>
   )

}
|
