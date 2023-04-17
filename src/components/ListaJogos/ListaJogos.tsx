import { Div, Tr, Th, Td, Button } from "components";
import dayjs from "dayjs";
import { BetTypes } from "interfaces";
import { useState } from "react";

interface Transaction {
  id: number;
  name: string;
  value: number;
  date: Date;
}

interface ResultadosProps {
  results: Transaction[];
  min: any;
  max: any;
}

export function ListaJogos({ results, min, max }: ResultadosProps) {
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortedTransactions, setSortedTransactions] = useState<Transaction[]>(
    []
  );

  const filteredResultados = results.filter((data) => data.value >= min && data.value <= max);

  function sortTransactions(a: Transaction, b: Transaction) {
    if (sortOrder === "asc") {
      return a.value - b.value;
    } else {
      return b.value - a.value;
    }
  }

  function handleSort() {
    const sorted = filteredResultados.slice().sort(sortTransactions);
    setSortedTransactions(sorted);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  }

  function handleDateSort() {
    const sorted = filteredResultados.slice().sort((a: any, b: any) => {
      if (sortOrder === "asc") {
        return dayjs(a.date).diff(b.date);
      } else {
        return dayjs(b.date).diff(a.date);
      }
    });
    setSortedTransactions(sorted);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  }

  return (
    <Div flexDirection="column">
      <Tr
        backgroundColor="none"
        justifyContent="flex-end"
        textAlign="center"
        
      >
        <Button onClick={handleSort}>
          valor{" "}
        </Button>
        <Button onClick={handleDateSort}>
          data{" "}
        </Button>
      </Tr>
      <Tr
        backgroundColor="rgba(0,0,0,0.05)"
        justifyContent="space-evenly"
        textAlign="center"
      >
        <Th>Data da aposta</Th>
        <Th>Email</Th>
        <Th>N° da Pule</Th>
        <Th>Valor apostado</Th>
        <Th>Resultado</Th>
      </Tr>
      {sortedTransactions.length > 0
        ? sortedTransactions.map((data, index) => {
            return (
              <Tr key={index} justifyContent="space-evenly" textAlign="center">
                <Td>{dayjs(data.date).format("DD/MM/YYYY")}</Td>
                <Td>{data.name}</Td>
                <Td>192837192837</Td>
                <Td>{data.value.toFixed(2)} R$</Td>
                <Td>Credit</Td>
              </Tr>
            );
          })
        : filteredResultados.map((data, index) => {
            return (
              <Tr key={index} justifyContent="space-evenly" textAlign="center">
                <Td>{dayjs(data.date).format("DD/MM/YYYY")}</Td>
                <Td>{data.name}</Td>
                <Td>192837192837</Td>
                <Td>{data.value.toFixed(2)} R$</Td>
                <Td>Credit</Td>
              </Tr>
            );
          })}
    </Div>
  );
}
