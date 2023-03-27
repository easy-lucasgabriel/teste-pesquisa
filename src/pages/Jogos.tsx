import { Select, Space } from 'antd';
import { Text, Input, Div, Button, ListaJogos, Table, Range } from "components";
import { useBets, useDates } from "hooks";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export const Jogos = () => {
  const { bets, getTudo } = useBets();
  const [search, setSearch] = useState("");
  const [dateInitial, setDateInitial] = useState("");
  const [dateFinal, setDateFinal] = useState("");
  const { register, handleSubmit } = useForm();
  const [lotas, setLotas] = useState(['']);
  const { resultSearch, getAllDates } = useDates();
  const { Option } = Select;

  const transactions = [
    { id: 1, name: "Transaction 1", value: 20, date: new Date("2022-01-01") },
    { id: 2, name: "Transaction 2", value: 100, date: new Date("2022-01-02") },
    { id: 3, name: "Transaction 3", value: 35, date: new Date("2022-01-03") },
    { id: 4, name: "Transaction 4", value: 10, date: new Date("2022-01-04") },
  ];

  const loterias = [
    { id: 1, loteria: "BRAZINO" },
    { id: 2, loteria: "Casas Bahia" },
    { id: 3, loteria: "SBT" },
    { id: 4, loteria: "Record" },
    { id: 5, loteria: "Globo" },
    { id: 6, loteria: "Band" },
    { id: 7, loteria: "Bras" },
    { id: 8, loteria: "Se" },
    { id: 9, loteria: "Tatu" },
    { id: 10, loteria: "boa" },
    { id: 11, loteria: "oi" },
    { id: 12, loteria: "iaou" }
  ]

  useEffect(() => {
    getTudo();
  }, [getTudo]);

  const onSubmit = (ev: any) => {
    getAllDates(dateInitial, dateFinal);
  };

  const handleChange = (value: string[]) => {
    setLotas(value)
  }

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
          <Text fontWeight="600" color="rgba(10,10,10,.9)">
            Lista de Pesquisa
          </Text>
          <Div
            width="100%"
            flexDirection="column"
          >
            <Div
              width="50%">

              <Input
                placeholder="Data Inicial"
                width="50%"
                type="date"
                value={dateInitial}
                {...register("dateInitial")}
                onChange={(e) => setDateInitial(e.target.value)}
              />

              <Input
                placeholder="Data Final"
                width="50%"
                type="date"
                value={dateFinal}
                {...register("dateFinal")}
                onChange={(e) => setDateFinal(e.target.value)}
              />
            </Div>

            <Div
            width="50%"
            justifyContent="space-between">
              
              <Input
                placeholder="Insira um nome"
                width="35%"
                type=""
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <Range
              />
            </Div>

            <Div
              width="100%"
              justifyContent="space-between"
            >
              <Select
                mode='multiple'
                style={{ minWidth: '30%' }}
                placeholder="Loterias"
                onChange={handleChange}
                optionLabelProp="label"
              >
                {loterias.map((data, index) => {
                  return <><Option key={index} value={data.loteria}>
                    <Space>{data.loteria}</Space>
                  </Option></>
                })}
              </Select>

              <Button type="submit">OK</Button>
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
            <h2>Lista dos Jogos</h2>
            <ListaJogos results={transactions} />
          </Table>
        </Div>
      </Div>
    </Div>
  );
};
