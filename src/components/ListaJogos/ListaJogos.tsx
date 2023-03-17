
import dayjs from 'dayjs';
import { BetTypes } from 'interfaces';

 interface ResultadosProps {
    results: BetTypes[];
 }
 
 

export function ListaJogos({ results }:ResultadosProps) {

    console.log(results);

    return (
        <ul>
      {results.map((data,index) => (
        <li key={index}>
          <hr />
          email: {data.username} <br />
          valor apostado: {data.total_value} R$ <br />
          data da aposta: {dayjs(data.bet_date).format("DD/MM/YYYY")}
          <hr />
        </li>
      ))}
    </ul>
    )
}

