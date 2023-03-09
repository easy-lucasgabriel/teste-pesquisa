import { api } from "providers";
import { Result } from "interfaces";

const getPers = () => api.get<Result[]>('/people/')

export const Personagens = {
  getPers
}
