import { Div, Tr, Th, Td, Button } from "components";
import dayjs from "dayjs";
import { BetTypes } from "interfaces";
import { useState } from "react";

interface ResultadosProps {
  results: BetTypes[];
}

export function ListaJogos({ results }: ResultadosProps) {
  const [sortedNumbers, setSortedNumbers] = useState<BetTypes[]>([]);
  const [sortOrder, setSortOrder] = useState("asc");

  function handleSort() {
    const sorted = results.slice().sort((a: any, b: any) => {
      if (sortOrder === "asc") {
        return a.total_value - b.total_value;
      } else {
        return b.total_value - a.total_value;
      }
    });
    setSortedNumbers(sorted);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  }

  return (
    <Div flexDirection="column">
      <Tr
        backgroundColor="none"
        justifyContent="space-evenly"
        textAlign="center"
      >
        <Button onClick={handleSort}>
          Ordenar {sortOrder === "asc" ? "decrescente" : "crescente"}{" "}
        </Button>
      </Tr>
      <Tr
        backgroundColor="rgba(0,0,0,0.05)"
        justifyContent="space-evenly"
        textAlign="center"
      >
        <Th>Email</Th>
        <Th>Valor apostado</Th>
        <Th>N° da Pule</Th>
        <Th>Data da aposta</Th>
        <Th>Resultado</Th>
      </Tr>
      {sortedNumbers.length > 0
      ? sortedNumbers.map((data, index) => {
        return <Tr key={index} justifyContent="space-evenly" textAlign="center">
          <Td>{data.username}</Td>
          <Td>{data.total_value.toFixed(2)} R$</Td>
          <Td>{data.reg_number}</Td>
          <Td>{dayjs(data.bet_date).format("DD/MM/YYYY")}</Td>
          <Td>{data.bet_status === "0" ? 'Perdeu' : 'Ganhou'}</Td>
        </Tr>;
      })
      : results.map((data, index) => {
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
