import { RootObject } from "interfaces";
import { api } from "providers";


const getPers = () => api.get<RootObject[]>(`/report/transactions/`);


export const Personagens = {
  getPers
}
