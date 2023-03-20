import { RootObject } from "interfaces";
import { api } from "providers";

const getDate = (dateInitial:string, dateFinal:string) => api.get<RootObject[]>(`/api/v2/bet/list/report/?created_date_min=${dateInitial}&created_date_max=${dateFinal}`);

export const Dates = {
  getDate
}
