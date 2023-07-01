import {useEffect, useState} from "react";
import "./clouds.css";
import {ICloudComponent} from "./cloud.types";


export function Clouds({id, cloudHeight, cloudSize, onCloudDelete, url}: ICloudComponent) {


   const [position, setPosition] = useState(0);


   useEffect(() => {
      setInterval(() => {
         setPosition((prev) => prev + 0.5);
      }, 100);
   }, []);

   useEffect(() => {
      console.log(position);
      if (position > 60) {
         onCloudDelete(id);
      }
   }, [position]);

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
