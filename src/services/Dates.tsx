import { BetTypes, RootObject} from "interfaces";
import { api } from "providers";

const getDate = (dateInitial:string, dateFinal:string) => api.get<BetTypes[]>(`/api/v2/bet/list/report/?created_date_min=${dateInitial}&created_date_max=${dateFinal}`);

const getTooDate = (dateInitial:string, dateFinal:string) => api.get<RootObject[]>(`/report/transactions/?created_date_min=${dateInitial}&created_date_max=${dateFinal}`);

export const Dates = {
  getDate,
  getTooDate
}
