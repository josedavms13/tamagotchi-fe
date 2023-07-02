export interface IResgisterTypes {
   username:string | null,
   password:string | null,
   petName: string | null,
   petColor: "blue" | "red" | "orange" | "green" | null
   onUserRegister: (usernameSubmit:string, passwordSubmit:string, petNameSubmit:string, petColorSubmit:string)=> void,
}

export interface IMessage {title: string, message: string}
