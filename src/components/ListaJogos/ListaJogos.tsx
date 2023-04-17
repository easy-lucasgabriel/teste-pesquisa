import { Div, Tr, Th, Td, Button } from "components";
import dayjs from "dayjs";
import { BetTypes, GamesData } from "interfaces";
import { useState } from "react";

interface ResultadosProps {
  results: GamesData;
  min: any;
  max: any;
}

export function ListaJogos({ results, min, max }: ResultadosProps) {
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortedTransactions, setSortedTransactions] = useState<BetTypes[]>([]);

  const filteredResultados = results?.results.filter(
    (data) => data.total_value >= min && data.total_value <= max
  );

  function sortTransactions(a: BetTypes, b: BetTypes) {
    if (sortOrder === "asc") {
      return a.total_value - b.total_value;
    } else {
      return b.total_value - a.total_value;
    }
  }

  function handleSort() {
    const sorted = filteredResultados.slice().sort(sortTransactions);
    setSortedTransactions(sorted);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  }

  function handleDateSort() {
    const sorted = filteredResultados
      .slice()
      .sort((a: BetTypes, b: BetTypes) => {
        if (sortOrder === "asc") {
          return dayjs(a.created_date).diff(b.created_date);
        } else {
          return dayjs(b.created_date).diff(a.created_date);
        }
      });
    setSortedTransactions(sorted);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  }

  return (
    <Div flexDirection="column">
      <Tr backgroundColor="none" justifyContent="flex-end" textAlign="center">
        <Button onClick={handleSort}>valor </Button>
        <Button onClick={handleDateSort}>data </Button>
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
      {sortedTransactions.length > 0
        ? sortedTransactions.map((data, index) => {
            return (
              <Tr key={index} justifyContent="space-evenly" textAlign="center">
                <Td>{data.username}</Td>
                <Td>{data.total_value.toFixed(2)} R$</Td>
                <Td>{dayjs(data.created_date).format("DD/MM/YYYY")}</Td>
              </Tr>
            );
          })
        : filteredResultados.map((data, index) => {
            return (
              <Tr key={index} justifyContent="space-evenly" textAlign="center">
                <Td>{data.username}</Td>
                <Td>{data.total_value.toFixed(2)} R$</Td>
                <Td>{dayjs(data.created_date).format("DD/MM/YYYY")}</Td>
              </Tr>
            );
          })}
    </Div>
  );
}
