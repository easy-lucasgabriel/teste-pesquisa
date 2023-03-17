
import { BetTypes } from 'interfaces';

 interface ResultadosProps {
    results: BetTypes[];
 }
 
 

function ListaJogos({ results }:ResultadosProps) {

    console.log(results);

    return (
        <ul>
      {results.map((data,index) => (
        <li key={index}>
          <hr />
          email: {data.username} <br />
          valor apostado: {data.total_value} R$ <br />
          data da aposta: {data.bet_date}
          <hr />
        </li>
      ))}
    </ul>
    )
}

export default ListaJogos;