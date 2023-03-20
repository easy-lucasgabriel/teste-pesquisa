import { useEffect, useState } from "react";
import { RootObject } from "interfaces";
import dayjs from "dayjs";
import { Tr, Th, Td, Div, Button } from "components";

interface ResultadosProps {
  resultados: RootObject[];
}

export function ListaPersonagens({ resultados }: ResultadosProps) {
  const [sortedNumbers, setSortedNumbers] = useState<RootObject[]>([]);
  const [sortOrder, setSortOrder] = useState("asc");

  console.log(resultados);

  function handleSort() {
    const sorted = resultados.slice().sort((a: any, b: any) => {
      if (sortOrder === "asc") {
        return a.data_content.sending.value - b.data_content.sending.value;
      } else {
        return b.data_content.sending.value - a.data_content.sending.value;
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
        <Th>Valor total apostado</Th>
        <Th>Data da aposta</Th>
      </Tr>
      {sortedNumbers.length > 0
        ? sortedNumbers.map((data, index) => {
            return (
              <Tr key={index} justifyContent="space-evenly" textAlign="center">
                <Td>{data.data_content.sending.username}</Td>
                <Td>{data.data_content.sending.value.toFixed(2)} R$</Td>
                <Td>{dayjs(data.modified_date).format("DD/MM/YYYY")}</Td>
              </Tr>
            );
          })
        : resultados.map((data, index) => {
            return (
              <Tr key={index} justifyContent="space-evenly" textAlign="center">
                <Td>{data.data_content.sending.username}</Td>
                <Td>{data.data_content.sending.value.toFixed(2)} R$</Td>
                <Td>{dayjs(data.modified_date).format("DD/MM/YYYY")}</Td>
              </Tr>
            );
          })}
    </Div>
  );
}
