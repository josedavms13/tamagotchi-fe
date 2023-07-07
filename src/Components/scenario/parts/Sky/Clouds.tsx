import {useEffect, useState} from "react";
import "./clouds.css";
import {ICloudComponent} from "./cloud.types";


export function Clouds({id, cloudHeight, cloudSize, onCloudDelete, url}: ICloudComponent) {


   const [position, setPosition] = useState(0);


   useEffect(() => {
      setInterval(() => {
         setPosition((prev) => prev + 0.2);
      }, 50);
   }, []);

   useEffect(() => {
      if (position > 60) {
         onCloudDelete(id);
      }
   }, [position, onCloudDelete, id]);

   return (
      <div className="cloud" style={ {
         "left": `${ position }vw`,
         "top": cloudHeight,
         "width": cloudSize,
         "height": cloudSize
      } }>
         <img src={ url } alt={ "cloud" }/>
      </div>
   );
}
