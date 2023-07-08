

export interface IFieldBox {
   id: number,
   fieldMark: string,
   isLocked: boolean,
   onFieldSelected: (id: number) => void,
}
