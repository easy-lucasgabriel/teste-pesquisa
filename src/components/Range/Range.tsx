import { Div } from "components/Div";
import { useState } from 'react';

export function Range() {
    const [value,setValue] = useState();

    const handleChange= (ev:any) =>{
        setValue(ev)
    }

    return (
        <Div
           boxShadow=" rgb(0 0 0 / 5%) 0 0 8px"
           backgroundColor="#f7f7f7"
           justifyContent="center"
        >0
        <Div
        position="absolute"
        marginBottom= "100px" 
        >{value}</Div>
        <input type = "range" min = "0" max = "1000" value={value} onChange={(e) => handleChange} />
            1000
        </Div >
    )
}

