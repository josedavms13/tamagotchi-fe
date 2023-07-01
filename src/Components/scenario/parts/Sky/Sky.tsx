import {useEffect, useState} from "react";
import {Clouds} from "./Clouds.tsx";
import {ICloudData} from "./cloud.types.ts";
import cloud1 from "../../../../assets/sprites/clouds/cloud1.png";
import cloud2 from "../../../../assets/sprites/clouds/cloud2.png";
import cloud3 from "../../../../assets/sprites/clouds/cloud3.png";
import cloud4 from "../../../../assets/sprites/clouds/cloud4.png";
import cloud5 from "../../../../assets/sprites/clouds/cloud5.png";
import cloud6 from "../../../../assets/sprites/clouds/cloud6.png";


export function Sky() {
   const [cloudArray, setCloudArray] = useState<ICloudData[]>([]);
   const [cloudImagesArray] = useState<{ url: string }[]>([
      {
         url: cloud1
      },
      {
         url: cloud2
      },
      {
         url: cloud3
      },
      {
         url: cloud4
      },
      {
         url: cloud5
      },
      {
         url: cloud6
      },
   ]);

   const randomId = Math.floor(Math.random() * 10);

   function getRandomIndex() {
      const maxIndex = cloudImagesArray.length;

      return Math.floor(Math.random() * maxIndex);

   }

   useEffect(() => {
      setInterval(() => {
         setCloudArray((prev) => {
            const arrayCopy = [...prev];
            if (arrayCopy.length < 10 ) {
               arrayCopy.push({
                  url: cloudImagesArray[getRandomIndex()].url,
                  id: randomId,
                  moveSpeed: 0,
                  cloudHeight: getRandomHeight(),
                  cloudSize: getRandomSize(),
               });
            }
            return arrayCopy;
         });
      }, 5000);
   }, [randomId, getRandomIndex, cloudImagesArray, getRandomHeight]);

   function getRandomHeight(): number {
      return Math.floor(Math.random() * 100) + 100;
   }

   function deleteCloud(cloudId: number) {
      console.log(`Deleting ${ cloudId }`);
      setCloudArray((prev) => {
         const arrayCopy = [...prev];
         console.log(arrayCopy, "arrayCopy");
         return arrayCopy.filter((element)=>element.id!==cloudId);

      });
   }

   function getRandomSize(): number {
      return Math.floor(Math.random() * 100) + 100;
   }

   return (
      <div className="sky">
         Sky
         { cloudArray &&
            cloudArray.length > 0 &&
            cloudArray.map((cloud) => (
               <Clouds
                  url={ cloud.url }
                  id={ cloud.id }
                  cloudHeight={ cloud.cloudHeight }
                  cloudSize={ cloud.cloudSize }
                  moveSpeed={ cloud.moveSpeed }
                  onCloudDelete={ deleteCloud }
               />
            )) }
      </div>
   );
}
