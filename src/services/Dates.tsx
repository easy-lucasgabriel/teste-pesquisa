import { Data, GamesData } from "interfaces";
import { api } from "providers";

const getDate = (dateInitial:string, dateFinal:string, premios: any, lotas:any, id:any) => api.get<GamesData>(`/api/v2/bet/list/report/?page_size=15`,{
  params: {
    created_date_min: dateInitial,
    created_date_max: dateFinal,
    pgtoSource: premios,
    bet_lottery: lotas,
    user: id,
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
