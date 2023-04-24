import { Modal } from "antd";
import { Div, Tr, Th, Td, Button, Text } from "components";
import dayjs from "dayjs";
import { BetTypes, GamesData } from "interfaces";
import { useState, useEffect } from "react";
import ReactLoading from "react-loading";

interface ResultadosProps {
  results: GamesData | any;
  min: any;
  max: any;
  loading: boolean;
}

export function ListaJogos({ results, min, max, loading }: ResultadosProps) {
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortedTransactions, setSortedTransactions] = useState<BetTypes[]>([]);
  const [isTransactionModalOpen, setIsTransactionModalOpen] = useState<
    boolean[]
  >([]);

  useEffect(() => {
    setIsTransactionModalOpen(Array(results.length).fill(false));
  }, [results]);

  const filteredResultados = results?.results.filter(
    (data: BetTypes) => data.total_value >= min && data.total_value <= max
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
      <Tr backgroundColor="none" justifyContent="flex-end" textAlign="center">
        <Button onClick={handleSort}>valor </Button>
        <Button onClick={handleDateSort}>data </Button>
      </Tr>
      <Tr
        backgroundColor="rgba(0,0,0,0.05)"
        textAlign="left"
        padding="0 0.5vw 0 0.5vw"
      >
        <Th>Data da aposta</Th>
        <Th width="200%">Email</Th>
        <Th>N° da Pule</Th>
        <Th>Valor apostado</Th>
        <Th>Resultado</Th>
      </Tr>
      {results.length > 0 ? (
        sortedTransactions.length > 0 ? (
          sortedTransactions.map((data, index) => {
            return (
              <Tr padding="0 0.5vw 0 0.5vw" key={index} textAlign="left">
                <Td>{dayjs(data.created_date).format("DD/MM/YYYY")}</Td>
                <Td width="200%">{data.username}</Td>
                <Td>{data.reg_number}</Td>
                <Td>{data.total_value.toFixed(2)} R$</Td>
                <Td onClick={() => showModal(index)}>Abrir</Td>
                <Modal
                  open={isTransactionModalOpen[index]}
                  onOk={() => handleCancel(index)}
                  onCancel={() => handleCancel(index)}
                >
                  <Text textAlign="center" fontWeight="bolder" fontSize="20px">
                    {data.username}
                  </Text>
                  <p>Id usuário</p> <text>{data.user_id}</text>
                  <p>Nome do usuário</p> <text>{data.username}</text>
                </Modal>
              </Tr>
            );
          })
        ) : (
          filteredResultados.map((data: BetTypes, index: number) => {
            return (
              <Tr key={index} justifyContent="space-evenly" textAlign="center">
                <Td>{dayjs(data.created_date).format("DD/MM/YYYY")}</Td>
                <Td width="200%">{data.username}</Td>
                <Td>{data.reg_number}</Td>
                <Td>{data.total_value.toFixed(2)} R$</Td>
                <Td onClick={() => showModal(index)}>Abrir</Td>
                <Modal
                  open={isTransactionModalOpen[index]}
                  onOk={() => handleCancel(index)}
                  onCancel={() => handleCancel(index)}
                >
                  <Text textAlign="center" fontWeight="bolder" fontSize="20px">
                    {data.username}
                  </Text>
                  <p>Id usuário</p> <text>{data.user_id}</text>
                  <p>Nome do usuário</p> <text>{data.username}</text>
                </Modal>
              </Tr>
            );
          })
        )
      ) : loading ? (
        <Div justifyContent="center" marginTop="5%">
          <ReactLoading type="spin" color="gray" height="5%" width="5%" />
        </Div>
      ) : (
        <></>
      )}
    </Div>
  );
}
