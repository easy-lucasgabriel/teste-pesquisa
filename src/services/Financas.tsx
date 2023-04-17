import { RootObject } from "interfaces";
import { api } from "providers";


const getFinancas = () => api.get<RootObject[]>(`/report/transactions/`);


export const Financas = {
  getFinancas
}
