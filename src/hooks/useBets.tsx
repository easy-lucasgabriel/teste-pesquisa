import { BetTypes } from "interfaces";
import { useCallback, useState } from "react";
import { Bets } from "services";

export const useBets = () => {
  const [bets,setBets] = useState<BetTypes[]>([]);

  const getTudo = useCallback (async () => {
    const { status, data } = await Bets.getBets();

    if (status !== 200) throw new Error();

    setBets(data);

  },[]);

  return { 
    bets,
    getTudo 
  };
};
