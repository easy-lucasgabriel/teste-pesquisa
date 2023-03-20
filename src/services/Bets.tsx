import { BetTypes } from "interfaces";
import { api } from "providers";


const getBets = () => api.get<BetTypes[]>(`/bet/list/report`);


export const Bets = {
  getBets
}
