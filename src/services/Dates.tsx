import { Data } from "interfaces";
import { api } from "providers";

const getDate = (dateInitial:string, dateFinal:string, premios: any, lotas:any) => api.get(`/api/v2/bet/list/report/`,{
  params: {
    created_date_min: dateInitial,
    created_date_max: dateFinal,
    pgtoSource: premios,
    bet_lottery: lotas,
  }
});

const getTooDate = (dateInitial:string, dateFinal:string, premios: any, lotas:any) => api.get<Data>(`/report/transactions/?page_size=15`, {
  params: {
    created_date_min: dateInitial,
    created_date_max: dateFinal,
    pgtoSource: premios,
    type_transaction: lotas,
  }
});

export const Dates = {
  getDate,
  getTooDate
}
