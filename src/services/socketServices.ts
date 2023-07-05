import axios from "axios";
import {ISocketCreateResponse} from "./socketServices.types.ts";

const baseUrl = "http://localhost:4545/api";

export async function createSocketServer() {
   return axios.get<ISocketCreateResponse>(baseUrl + "/session/create-session");
}
