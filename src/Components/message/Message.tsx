import {IMessage} from "./message.types.ts";

export function Message({
   title, message,
}: IMessage) {
   return (
      <div>
         <h6>{ title }</h6>
         <p>{ message }</p>
      </div>
   );
}
