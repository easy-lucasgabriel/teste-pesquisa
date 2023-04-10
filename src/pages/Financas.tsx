import { Select, Space } from "antd";
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
  const [premios, setPremios] = useState([]);
  const [situacao, setSit] = useState<number>();
  const [transacao, setTransacao] = useState<number>();
  const [lotas, setLotas] = useState();
  const { register, handleSubmit } = useForm();
  const { resultSearch, getAllDates } = useTooDates();
  const { Option } = Select;
  const [min, setMin] = useState<number>();
  const [max, setMax] = useState<number>();

  const transactions = [
    { id: 1, name: "Transaction 1", value: 20, date: new Date("2022-01-01") },
    { id: 2, name: "Transaction 2", value: 100, date: new Date("2022-01-02") },
    { id: 3, name: "Transaction 3", value: 35, date: new Date("2022-01-03") },
    { id: 4, name: "Transaction 4", value: 10, date: new Date("2022-01-04") },
  ];

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
                    label: "Pago",
                  },
                  {
                    value: "3",
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
            <ListaPersonagens min={min} max={max} resultados={transactions} />
          </Table>
        </Div>
      </Div>
    </Div>
  );
};
