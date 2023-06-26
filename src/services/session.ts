import axios from "axios";

const baseUrl = "localhost";
const port = 4545;
const url = `http://${ baseUrl }:${ port }/api/session/create-session`;

export async function startSession(roomName: string) {
   const body = {
      game: "ticTacToe",
      roomName: roomName,
      gameTime: 10
   };
   return axios.post(url, body);

}
