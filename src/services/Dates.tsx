import { RootObject} from "interfaces";
import { api } from "providers";

const getDate = (dateInitial:string, dateFinal:string, premios: any, lotas:any) => api.get(`/api/v2/bet/list/report/`,{
  params: {
    created_date_min: dateInitial,
    created_date_max: dateFinal,
    pgtoSource: premios,
    bet_lottery: lotas,
  }
});

const getTooDate = (dateInitial:string, dateFinal:string, situacao: any, transacao:any) => api.get<RootObject[]>(`/report/transactions/`, {
  params: {
    created_date_min: dateInitial,
    created_date_max: dateFinal,
    bet_status: situacao,
    pag_method: transacao,
  }
});

export const Dates = {
  getDate,
  getTooDate
}
