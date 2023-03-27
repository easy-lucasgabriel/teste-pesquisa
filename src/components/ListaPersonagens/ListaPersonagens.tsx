import { useState } from "react";
import { RootObject} from "interfaces";
import dayjs from "dayjs";
import { Tr, Th, Td, Div, Button } from "components";

interface Transaction {
  id: number;
  name: string;
  value: number;
  date: Date;
}

interface ResultadosProps {
  resultados: Transaction[];
}

export function ListaPersonagens({ resultados }: ResultadosProps) {
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortedTransactions, setSortedTransactions] = useState<Transaction[]>(
    []
  );

  function sortTransactions(a: Transaction, b: Transaction) {
    if (sortOrder === "asc") {
      return a.value - b.value;
    } else {
      return b.value - a.value;
    }
  }

  function handleSort() {
    const sorted = resultados.slice().sort(sortTransactions);
    setSortedTransactions(sorted);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  }

  function handleDateSort() {
    const sorted = resultados.slice().sort((a: any, b: any) => {
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
        <Th>Email</Th>
        <Th>Valor total apostado</Th>
        <Th>Data da aposta</Th>
      </Tr>
      {sortedTransactions.length > 0
        ? sortedTransactions.map((data, index) => {
            return (
              <Tr key={index} justifyContent="space-evenly" textAlign="center">
                <Td>{data.name}</Td>
                <Td>{data.value.toFixed(2)} R$</Td>
                <Td>{dayjs(data.date).format("DD/MM/YYYY")}</Td>
              </Tr>
            );
          })
        : resultados.map((data, index) => {
            return (
              <Tr key={index} justifyContent="space-evenly" textAlign="center">
                <Td>{data.name}</Td>
                <Td>{data.value.toFixed(2)} R$</Td>
                <Td>{dayjs(data.date).format("DD/MM/YYYY")}</Td>
              </Tr>
            );
          })}
    </Div>
  );
}
