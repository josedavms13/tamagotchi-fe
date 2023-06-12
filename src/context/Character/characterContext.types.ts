
export interface ICharacterContext {
   // Player context
   petName: string, // It won't change
   hungry: number,
   joy: number,
   tiredness: number,
   health: number,
   isAlive: boolean,
   // Methods to modify player context
   setHealth: (health: number) => void,
   setHungry: (newHungry?: number) => void,
   setJoy: (joy: number) => void,
   setTiredness: (tiredness: number) => void,
   setIsAlive: (isAlive: boolean) => void,
   // At the beginning will be empty
   setPetName: (petName: string) => void,
}
