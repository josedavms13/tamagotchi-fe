import {ICloudTypes} from "./cloudTypes.ts";
import {useState} from "react";
import "../../../assets/sprites/clouds/cloud1.jpg";


export function Cloud({speedMove, id}:ICloudTypes) {

   const cloud [cloudArray, setCloudArray] = useState<ICloudTypes[]>([
      {
         speedMove:0,
         id:1,
         url:"../../../assets/sprites/clouds/cloud1.jpg"},
      {
         speedMove:0,
         id:2,
         url:"../../../assets/sprites/clouds/cloud2.jpg"
      },
      {
         speedMove:0,
         id:3,
         url:"../../../assets/sprites/clouds/cloud3.jpg"
      },
      {
         speedMove: 0,
         id: 4,
         url: "../../../assets/sprites/clouds/cloud4.jpg"
      },
      {   speedMove:0,
         id:5,
         url:"../../../assets/sprites/clouds/cloud5.jpg"
      },
      {   speedMove:0,
         id:6,
         url:"../../../assets/sprites/clouds/cloud6.jpg"
      }
   ])


   return(
      <div className={"cloud"}>
         <img src={`../../../assets/sprites/clouds/cloud${id}.jpg`} alt={}></img>
      </div>
   )

}
|
