import { useState, useEffect } from "react";
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

export function ListaFinancas({ resultados, min, max }: ResultadosProps) {
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortedTransactions, setSortedTransactions] = useState<Transaction[]>(
    []
  );
  const [isTransactionModalOpen, setIsTransactionModalOpen] = useState<boolean[]>([]);
  const [activeScreen, setActiveScreen] = useState(0);

  useEffect(() => {
    setIsTransactionModalOpen(Array(resultados.length).fill(false));
  }, [resultados]);


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

  function handleSlide() {
    setActiveScreen(activeScreen === 0 ? 1 : 0);
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
              <Td>{dayjs(data.date).format("DD/MM/YYYY")}</Td>
              <Td width="200%">{data.name}</Td>
              <Td>Pendente</Td>
              <Td>Entrada</Td>
              <Td>{data.value.toFixed(2)} R$</Td>
              <Td onClick={() => showModal(index)}>Abrir</Td>
              <Modal
                open={isTransactionModalOpen[index]}
                onOk={() => handleCancel(index)}
                onCancel={() => handleCancel(index)}
                footer={[]}
              >
                <Div
                  style={{
                    flex: 1,
                    display: activeScreen === 0 ? "block" : "none",
                    textAlign: "center"
                  }}
                >
                  <Button onClick={handleSlide}>Button para Div 2</Button>
                </Div>

                <Div
                  style={{
                    flex: 1,
                    display: activeScreen === 1 ? "block" : "none",
                    textAlign: "center"
                  }}
                >
                  <Button onClick={handleSlide}>Button para Div 1</Button>
                </Div>
              </Modal>
            </Tr>
          );
        })
        : filteredResultados.map((data, index) => {
          return (
            <Tr key={index} justifyContent="space-evenly" textAlign="center">
              <Td>{dayjs(data.date).format("DD/MM/YYYY")}</Td>
              <Td width="200%">{data.name}</Td>
              <Td>Pendente</Td>
              <Td>Entrada</Td>
              <Td>{data.value.toFixed(2)} R$</Td>
              <Td onClick={() => showModal(index)}>abrir</Td>
              <Modal
                open={isTransactionModalOpen[index]}
                onOk={() => handleCancel(index)}
                onCancel={() => handleCancel(index)}
                footer={[]}
              >
                <Div
                  style={{
                    flex: 1,
                    display: activeScreen === 0 ? "block" : "none",
                    textAlign: "center"
                  }}
                >
                  <Button onClick={handleSlide}>Button para Div 2</Button>
                </Div>

                <Div
                  style={{
                    flex: 1,
                    display: activeScreen === 1 ? "block" : "none",
                    textAlign: "center"
                  }}
                >
                  <Button onClick={handleSlide}>Button para Div 1</Button>
                </Div>
              </Modal>
            </Tr>
          );
        })}
    </Div>
  );
}