import { Resultados } from "interfaces";
import { api } from "providers";


const getPers = () => api.get<Resultados[]>(`/people/`)

export const Personagens = {
  getPers
}
