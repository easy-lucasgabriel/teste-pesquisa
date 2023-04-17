import { useState } from "react";
import { Data, ResultadoFinancas } from "interfaces";
import dayjs from "dayjs";
import { Tr, Th, Td, Div, Button } from "components";
import { Modal } from "antd";

interface ResultadosProps {
  resultados: Data;
  min: any;
  max: any;
}

export function ListaPersonagens({ resultados, min, max }: ResultadosProps) {
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortedTransactions, setSortedTransactions] = useState<ResultadoFinancas[]>([]);

  const filteredResultados = resultados?.results.filter((data : any) => data.value >= min && data.value <= max);

  function sortTransactions(a: any, b: any) {
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
                <Td>{data.user}</Td>
                <Td>{data.value.toFixed(2)} R$</Td>
                <Td>{dayjs(data.created_date).format('DD-MM-YYYY')}</Td>
                <Button onClick={showModal}>Abrir</Button>
                <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                  <p>{data.id}</p>
                  <p>{data.user}</p>
                </Modal>
              </Tr>
            );
          })
        : filteredResultados.map((data : any, index : any) => {
            return (
              <Tr key={index} justifyContent="space-evenly" textAlign="center">
                <Td>{data.user}</Td>
                <Td>{data.value.toFixed(2)} R$</Td>
                <Td>{dayjs(data.created_date).format("DD-MM-YYYY")}</Td>
                <Button onClick={showModal}>Abrir</Button>
                                <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                  <p>{data.id}</p>
                  <p>{data.user}</p>
                </Modal>
              </Tr>
            );
          }) }
    </Div>
  );
}