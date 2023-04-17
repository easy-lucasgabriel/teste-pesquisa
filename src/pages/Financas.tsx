import { Select } from "antd";
import {
  Text,
  Input,
  Div,
  Button,
  Table,
  Range,
  ListaPersonagens,
} from "components";
import { useTooDates, useLotteries } from "hooks";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export const Financas = () => {
  const [dateInitial, setDateInitial] = useState("");
  const [dateFinal, setDateFinal] = useState("");
  const { lotteries, getTudo } = useLotteries();
  const [email, setEmail] = useState<any>();
  const [situacao, setSit] = useState<number>();
  const [transacao, setTransacao] = useState<number>();
  const [id, setId] = useState<number>();
  const [search, setSearch] = useState("");
  const { register, handleSubmit } = useForm();
  const { resultSearch, getAllDates } = useTooDates();
  const [min, setMin] = useState<number>();
  const [max, setMax] = useState<number>();

  const userEmail = [
    { id: 1, email: "andremerli74@gmail.com	" },
    { id: 2, email: "zxhbpg@jmurip.com" },
    { id: 3, email: "pmlxew@veracg.com" },
    { id: 4, email: "fabiosilvarodolpho@gmail.com	" },
    { id: 5, email: "feliperepresentante@yahoo.com.br	" },
    { id: 6, email: "fernando.financeiro@Yahoo.com.br" },
    { id: 7, email: "fernandopontes@outlook.com" },
    { id: 8, email: "dlima99@bol.com.br" },
    { id: 9, email: "larissahbaldoino@gmail.com" },
    { id: 10, email: "mark3qf527@hotmail.com	" },
    { id: 11, email: "user11@example.com" },
    { id: 12, email: "user12@example.com" },
    { id: 13, email: "user13@example.com" },
    { id: 14, email: "user14@example.com" },
    { id: 15, email: "user15@example.com" },
    { id: 16, email: "user16@example.com" },
    { id: 17, email: "user17@example.com" },
    { id: 18, email: "user18@example.com" },
    { id: 19, email: "user19@example.com" },
    { id: 20, email: "user20@example.com" },
    { id: 21, email: "user21@example.com" },
    { id: 22, email: "user22@example.com" },
    { id: 23, email: "user23@example.com" },
    { id: 24, email: "user24@example.com" },
    { id: 25, email: "user25@example.com" },
    { id: 26, email: "user26@example.com" },
    { id: 27, email: "user27@example.com" },
    { id: 28, email: "user28@example.com" },
    { id: 29, email: "user29@example.com" },
    { id: 30, email: "user30@example.com" },
    { id: 31, email: "user31@example.com" },
    { id: 32, email: "user32@example.com" },
    { id: 33, email: "user33@example.com" },
    { id: 34, email: "user34@example.com" },
    { id: 35, email: "user35@example.com" },
    { id: 36, email: "user36@example.com" },
    { id: 37, email: "user37@example.com" },
    { id: 38, email: "user38@example.com" },
    { id: 39, email: "user39@example.com" },
    { id: 40, email: "user40@example.com" },
  ];

  const searchLowerCase = search.toLocaleLowerCase();

  const busca = userEmail.filter((busca) =>
    busca.email.toLocaleLowerCase().includes(searchLowerCase)
  );

  function handleChangeEmail(value: any) {
    const selectedEmail = userEmail.find((busca) => busca.email === value);
    setEmail(selectedEmail?.email);
    setId(selectedEmail?.id);
  }

  useEffect(() => {
    getTudo();
  }, []);

  function handleMinChange(name: number) {
    setMin(name);
  }

  function handleMaxChange(name: number) {
    setMax(name);
  }

  function handleTransChange(value: number) {
    setTransacao(value);
  }

  function handleSitChange(value: number) {
    setSit(value);
  }

  console.log(situacao, transacao);

  const onSubmit = (ev: any) => {
    if (dateInitial && dateFinal) {
      getAllDates(dateInitial, dateFinal, situacao, transacao);
    } else {
      window.alert("insira uma data inicial e uma final");
    }
  };

  return (
      <Div width="85%" flexDirection="column">
        <Div
          height="auto"
          width="90%"
          alignItems="center"
          margin="0 auto"
          border="1px solid rgba(0,0,0,.2)"
          padding="1%"
          backgroundColor="rgba(255,255,255,.9)"
        >
          <Div
            onSubmit={handleSubmit(onSubmit)}
            width="100%"
            flexDirection="column"
          >
  
            <Div width="50%" flexDirection="column">
              <Div width="80%">
  
                <Div width="50%" flexDirection="column">
                  <Text color="grey">Data inicial</Text>
                  <Input
                    placeholder="Data Inicial"
                    width="90%"
                    type="date"
                    {...register("dateInitial")}
                    onChange={(e) => setDateInitial(e.target.value)}
                  />
                </Div>
  
                <Div width="50%" flexDirection="column">
                <Text color="grey">Data final</Text>
                  <Input
                    placeholder="Data Final"
                    width="100%"
                    type="date"
                    {...register("dateFinal")}
                    onChange={(e) => setDateFinal(e.target.value)}
                  />
                </Div>
              </Div>
  
              <Div height="20%">
                <Range
                  onMinChange={handleMinChange}
                  onMaxChange={handleMaxChange}
                />
              </Div>
  
              <Div width="100%" justifyContent="flex-start">
                <Select
                  placeholder="Transação"
                  style={{
                    width: 120,
                  }}
                  onChange={handleTransChange}
                  options={[
                    {
                      value: "1",
                      label: "Entrada",
                    },
                    {
                      value: "2",
                      label: "Saida",
                    },
                  ]}
                />
  
                <Select
                  placeholder="Situação"
                  style={{
                    width: 120,
                  }}
                  onChange={handleSitChange}
                  options={[
                    {
                      value: "1",
                      label: "Pendente",
                    },
                    {
                      value: "2",
                      label: "Processamento",
                    },
                    {
                      value: "3",
                      label: "Pago",
                    },
                    {
                      value: "4",
                      label: "Rejeitado",
                    },
                    {
                      value: "6",
                      label: "Devolvido",
                    },
                    {
                      value: "7",
                      label: "Baixado",
                    },
                    {
                      value: "8",
                      label: "Pendente",
                    },
                    {
                      value: "11",
                      label: "Liberado",
                    },
                    {
                      value: '',
                      label: "Erro",
                    },
                  ]}
                />
  
                <Button type="submit" onClick={onSubmit}>
                  OK
                </Button>
              </Div>
            </Div>
          </Div>
        </Div>
  
        <Div
          justifyContent="center"
          height="auto"
          margin="0 auto"
          width="92%"
          backgroundColor="rgba(255,255,255,.9)"
        >
          <Div minHeight="85vh" alignItems="center">
            <Table flexDirection="column">
              <h2>Lista das Finanças</h2>
              <ListaPersonagens min={min} max={max} resultados={resultSearch} />
            </Table>
          </Div>
        </Div>
      </Div>
    );
};
