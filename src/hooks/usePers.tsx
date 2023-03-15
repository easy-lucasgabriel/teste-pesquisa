import { RootObject } from "interfaces";
import { useCallback, useState } from "react";
import { Personagens } from "services";

export const usePers = () => {
  const [personagens,setPersonagens] = useState<RootObject[]>([]);

  const getAll = useCallback (async () => {
    const { status, data } = await Personagens.getPers();

    if (status !== 200) throw new Error();

    setPersonagens(data);

  },[]);

  return { 
    personagens,
    getAll 
  };
};
