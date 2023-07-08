import axios from "axios";
import {ISocketCreateResponse} from "./socketServices.types.ts";
import {getBaseUrl} from "./baseServices.ts";


export async function createSocketServer() {
   return axios.get<ISocketCreateResponse>(getBaseUrl() + "/session/create-session");
}
