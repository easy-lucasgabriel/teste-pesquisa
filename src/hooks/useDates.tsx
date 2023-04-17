import { Data, GamesData } from "interfaces";
import { useCallback, useState } from "react";
import { Dates } from "services";

export const useDates = () => {
  const [resultSearch,setResultSearch] = useState<GamesData>({count: 0, results: []});

  const getAllDates = useCallback (async (dateInitial:string, dateFinal:string, premios:any, lotas:any) => {
    const { status, data } = await Dates.getDate(dateInitial, dateFinal, premios, lotas);

    if (status !== 200) throw new Error();

    setResultSearch(data)

  },[]);

  return { 
    resultSearch,
    getAllDates 
  };
};

export const useTooDates = () => {
  const [resultSearch,setResultSearch] = useState<Data>({count: 0, results: []});

  const getAllDates = useCallback (async (dateInitial:string, dateFinal:string, premios:any, lotas:any) => {
    const { status, data } = await Dates.getTooDate(dateInitial, dateFinal, premios, lotas);

    if (status !== 200) throw new Error();

    setResultSearch(data)

  },[]);

  return { 
    resultSearch,
    getAllDates 
  };
};
