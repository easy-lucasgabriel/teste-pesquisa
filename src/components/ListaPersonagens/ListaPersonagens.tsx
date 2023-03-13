
import { Resultados } from 'interfaces';

 interface ResultadosProps {
    resultados: Resultados[];
 }
 

function ListaPersonagens({ resultados }:ResultadosProps) {

    return (
        <ul>
      {resultados.map((personagem,index) => (
        <li key={index}>{personagem.name}</li>
      ))}
    </ul>
    )
}

export default ListaPersonagens;