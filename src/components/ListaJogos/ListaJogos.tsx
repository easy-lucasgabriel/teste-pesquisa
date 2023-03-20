import { Div, Tr, Th, Td } from "components";
import dayjs from "dayjs";
import { BetTypes } from "interfaces";

interface ResultadosProps {
  results: BetTypes[];
}

export function ListaJogos({ results }: ResultadosProps) {
  return (
    <Div flexDirection="column">
      <Tr backgroundColor="rgba(0,0,0,0.05)" justifyContent="space-evenly" textAlign="center">
        <Th>Email</Th>
        <Th>Valor apostado</Th>
        <Th>N° da Pule</Th>
        <Th>Data da aposta</Th>
        <Th>Resultado</Th>
      </Tr>
      {results.map((data, index) => {
        return <Tr key={index} justifyContent="space-evenly" textAlign="center">
          <Td>{data.username}</Td>
          <Td>{data.total_value.toFixed(2)} R$</Td>
          <Td>{data.reg_number}</Td>
          <Td>{dayjs(data.bet_date).format("DD/MM/YYYY")}</Td>
          <Td>{data.bet_status === "0" ? 'Perdeu' : 'Ganhou'}</Td>
        </Tr>;
      })}
    </Div>
  );
}
