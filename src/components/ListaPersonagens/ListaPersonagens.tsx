import { useState } from "react";
import { RootObject } from "interfaces";
import dayjs from "dayjs";
import { Tr, Th, Td, Div, Button, Text } from "components";
import { Modal } from "antd";

interface Transaction {
  id: number;
  name: string;
  value: number;
  date: Date;
}

interface ResultadosProps {
  resultados: Transaction[];
  min: any;
  max: any;
}

export function ListaPersonagens({ resultados, min, max }: ResultadosProps) {
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortedTransactions, setSortedTransactions] = useState<Transaction[]>(
    []
  );

  const filteredResultados = resultados.filter((data) => data.value >= min && data.value <= max);

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

  const valorAposta = filteredResultados.map((data) => { return data.value });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
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
        justifyContent="space-evenly"
        textAlign="center"
      >
        <Th>Email</Th>
        <Th>Valor total apostado</Th>
        <Th>Data da aposta</Th>
        <Th>Resumo</Th>
      </Tr>
      {sortedTransactions.length > 0
        ? sortedTransactions.map((data, index) => {
          return (
            <Tr key={index} justifyContent="space-evenly" textAlign="center">
              <Td>{data.name}</Td>
              <Td>{data.value.toFixed(2)} R$</Td>
              <Td>{dayjs(data.date).format("DD/MM/YYYY")}</Td>
              <Td
                onClick={showModal}
              >Abrir
              </Td>
              <Modal
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                ]}
              >
                <Text
                  textAlign="center"
                >{data.name}
                </Text>
                <p>{data.id}</p>
                <p>{data.name}</p>
              </Modal>
            </Tr>
          );
        })
        : filteredResultados.map((data, index) => {
          return (
            <Tr key={index} justifyContent="space-evenly" textAlign="center">
              <Td>{data.name}</Td>
              <Td>{data.value.toFixed(2)} R$</Td>
              <Td>{dayjs(data.date).format("DD/MM/YYYY")}</Td>
              <Td
                key={index}
                onClick={showModal}
                >
                  Abrir</Td>
              <Modal
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                ]}
              >
                <Text
                  textAlign="center"
                  fontWeight="bold"
                  fontSize="20px"
                >
                  {data.name}
                </Text>
                <p>{data.id}</p>
                <p>{data.name}</p>
              </Modal>
            </Tr>
          );
        })}
    </Div>
  );
}