import { useState,useEffect } from "react";
import dayjs from "dayjs";
import { Tr, Th, Td, Div, Button, Text } from "components";
import { Modal } from "antd";
import { Data,ResultadoFinancas } from "interfaces";

interface ResultadosProps {
  resultados: Data | any;
  min: any;
  max: any;
}

export function ListaFinancas({ resultados, min, max }: ResultadosProps) {
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortedTransactions, setSortedTransactions] = useState<ResultadoFinancas[]>(
    []
  );
  const [isTransactionModalOpen, setIsTransactionModalOpen] = useState<boolean[]>([]);

  useEffect(() => {
  setIsTransactionModalOpen(Array(resultados.length).fill(false));
}, [resultados]);

  const filteredResultados = resultados?.results.filter((data : ResultadoFinancas) => data.value >= min && data.value <= max);

  function sortTransactions(a: ResultadoFinancas, b: ResultadoFinancas) {
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

  const showModal = (index: number) => {
    setIsTransactionModalOpen((prevState) => {
      const newState = [...prevState];
      newState[index] = true;
      return newState;
    });
  };
  
  const handleCancel = (index: number) => {
    setIsTransactionModalOpen((prevState) => {
      const newState = [...prevState];
      newState[index] = false;
      return newState;
    });
  };

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
        textAlign="left"
        padding="0 0.5vw 0 0.5vw"
      >
        <Th>Data de criação</Th>
        <Th width="200%">Usuário</Th>
        <Th>Fluxo</Th>
        <Th>Status</Th>
        <Th>Valor</Th>
        <Th>Resumo</Th>
      </Tr>
      {sortedTransactions.length > 0
        ? sortedTransactions.map((data, index) => {
          return (
            <Tr padding="0 0.5vw 0 0.5vw" key={index} textAlign="left">
              <Td>{dayjs(data.created_date).format("DD/MM/YYYY")}</Td>
              <Td width="200%">{data.user}</Td>
              <Td>Pendente</Td>
              <Td>Entrada</Td>
              <Td>{data.value.toFixed(2)} R$</Td>
              <Td onClick={() => showModal(index)}>Abrir</Td>
              <Modal
                open={isTransactionModalOpen[index]}
                onOk={() => handleCancel(index)}
                onCancel={() => handleCancel(index)}
              >
                <Text
                  textAlign="center"
                  fontWeight="bolder"
                  fontSize="20px"
                >{data.user}
                </Text>
                <p>Número da Transação</p> <text>{data.id}</text>
                <p>Nome do usuário</p> <text>{data.user}</text>
              </Modal>
            </Tr>
          );
        })
        : filteredResultados.map((data : ResultadoFinancas , index : number) => {
          return (
            <Tr key={index} justifyContent="space-evenly" textAlign="center">
              <Td>{dayjs(data.created_date).format("DD/MM/YYYY")}</Td>
              <Td width="200%">{data.user}</Td>
              <Td>Pendente</Td>
              <Td>Entrada</Td>
              <Td>{data.value.toFixed(2)} R$</Td>
              <Td onClick={() => showModal(index)}>abrir</Td>
              <Modal
                open={isTransactionModalOpen[index]}
                onOk={() => handleCancel(index)}
                onCancel={() => handleCancel(index)}
              >
                <Text
                  textAlign="center"
                  fontWeight="bolder"
                  fontSize="20px"
                >
                  {data.user}
                </Text>
                <p>Número da Transação</p> <text>{data.id}</text>
                <p>Nome do usuário</p> <text>{data.user}</text>
              </Modal>
            </Tr>
          );
        })}
    </Div>
  );
}