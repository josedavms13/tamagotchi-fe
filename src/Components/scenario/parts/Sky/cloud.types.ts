export interface ICloudComponent extends ICloudData {
   onCloudDelete: (id: number) => void
}

export interface ICloudData {
   id: number,
   moveSpeed: number,
   cloudHeight: number,
   cloudSize: number,
   url: string
}


