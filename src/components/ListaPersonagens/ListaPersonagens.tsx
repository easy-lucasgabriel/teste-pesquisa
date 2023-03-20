
import { RootObject } from 'interfaces';
import dayjs from 'dayjs';
import { Column, Div } from 'components';

interface ResultadosProps {
  resultados: RootObject[];
}

export function ListaPersonagens({ resultados }: ResultadosProps) {

  console.log(resultados);

  return (
    <Column
      width="100%"
      flexDirection="column"
    >
      <Div
        width="100%"
        height="4vh"
      // bg="#00000056"
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

      {resultados.map((personagem, index) => (
        <Column
          key={index}>
          <Div
            minWidth="40%">
            {personagem.data_content.sending.username}
          </Div>

          <Div
            minWidth="20%"
          >
            {personagem.data_content.sending.value} R$
          </Div>

          <Div
            minWidth="20%"
          >
            {dayjs(personagem.modified_date).format("DD/MM/YYYY HH:mm:ss")}
          </Div>

          <Div
            minWidth="20%"
          >
            {personagem.data_content.return.Message}
          </Div>

        </Column>
      ))}
    </Column>
  )
}
