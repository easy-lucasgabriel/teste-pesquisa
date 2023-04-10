import { PageTypes } from "interfaces";
import { useCallback, useState } from "react";
import { Pokes } from "services";

export const usePokes = () => {
    const [pokes,setPokes] = useState<PageTypes>();

    const getPokes = useCallback (async (prev:any, count:any) => {
        const { status, data } = await Pokes.getPokes(prev, count);

        if(status !== 200) throw new Error();

        setPokes(data);
    }, []);

    return {
        pokes,
        getPokes
    };
};