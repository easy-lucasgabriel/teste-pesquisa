
import { RootObject } from 'interfaces';
import dayjs from 'dayjs';
import { Column, Div } from 'components';

 interface ResultadosProps {
    resultados: RootObject[];
 }
 
export function ListaPersonagens({ resultados }:ResultadosProps) {

    return (
        <Column
        width="100%"
        >
          <Div
          width="100%"
          >
          <Div
          minWidth="40%"
          >Email</Div>
          <Div
          minWidth="20%"
          >Valor total apostado</Div>
          <Div
          minWidth="20%"
          >Data da aposta</Div>
          </Div>

      {resultados.map((personagem,index) => (
        <Column 
        key={index}>
          <Div>
            {personagem.data_content.sending.username}
            </Div>

          <Div>
            {personagem.data_content.sending.value} R$
            </Div>

          <Div>
            {dayjs(personagem.modified_date).format("DD/MM/YYYY HH:mm:ss")}
            </Div>

        </Column>
      ))}
    </Column>
    )
}
