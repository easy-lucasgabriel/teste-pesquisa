import { Loterias } from "interfaces";
import { useCallback, useState } from "react";
import { Lotteries } from "services";

export const useLotteries = () => {
    const [lotteries,setLotteries] = useState<Loterias[]>([]);

    const getTudo = useCallback (async () => {
        const { status, data } = await Lotteries.getLotteries();

        if(status !== 200) throw new Error();

        setLotteries(data);

    }, []);

    return {
        lotteries,
        getTudo
    };
};