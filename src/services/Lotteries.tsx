import { Loterias } from "interfaces"
import { api } from "providers"

const getLotteries = () => api.get<Loterias[]>(`/check_lotteries_available`);

export const Lotteries = {
    getLotteries
}