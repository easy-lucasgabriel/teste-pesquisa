import { RootObject } from "interfaces";
import { useCallback, useState } from "react";
import { Financas } from "services";

export const usePers = () => {
  const [financas, setFinancas] = useState<RootObject[]>([]);

  const getAll = useCallback (async () => {
    const { status, data } = await Financas.getFinancas();

    if (status !== 200) throw new Error();

    setFinancas(data);

  },[]);

  return { 
    financas,
    getAll 
  };
};
