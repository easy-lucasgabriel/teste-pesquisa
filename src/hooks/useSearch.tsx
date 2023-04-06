import { BetTypes, RootObject } from "interfaces";
import { useCallback, useState } from "react";
import { Dates } from "services";

export const useTooDates = () => {
    const [resultSearch,setResultSearch] = useState<RootObject[]>([]);
  
    const getAllDates = useCallback (async (dateInitial:string, dateFinal:string) => {
      const { status, data } = await Dates.getTooDate(dateInitial, dateFinal);
  
      if (status !== 200) throw new Error();
  
      setResultSearch(data)
  
    },[]);
  
    return { 
      resultSearch,
      getAllDates
    };
  };