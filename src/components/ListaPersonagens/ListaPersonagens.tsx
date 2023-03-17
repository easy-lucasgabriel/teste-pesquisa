
import { RootObject } from 'interfaces';

 interface ResultadosProps {
    resultados: RootObject[];
 }
 
function ListaPersonagens({ resultados }:ResultadosProps) {

    return (
        <ul>
      {resultados.map((personagem,index) => (
        <li key={index}>
          <hr />
          email: {personagem.data_content.sending.username} <br />
          valor total apostado: {personagem.data_content.sending.value} R$ <br />
          data da aposta: {personagem.modified_date}
          <hr />
        </li>
      ))}
    </ul>
    )
}

export default ListaPersonagens;