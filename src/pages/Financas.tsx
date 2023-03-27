import { Text, Input, Div, Button, ListaPersonagens, Table } from "components";
import { usePers, useDates, useTooDates } from "hooks";
import { RootObject } from "interfaces";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";


export const Financas = () => {
  const { personagens, getAll } = usePers();
  const [search, setSearch] = useState("");
  const [dateInitial, setDateInitial] = useState("");
  const [dateFinal, setDateFinal] = useState("");
  const { register, handleSubmit } = useForm();
  const { resultSearch, getAllDates } = useTooDates();

  const onSubmit = (ev: any) => {
    getAllDates(dateInitial, dateFinal);
  };

  const transactions = [
    { id: 1, name: "Transaction 1", value: 20, date: new Date("2022-01-01") },
    { id: 2, name: "Transaction 2", value: 100, date: new Date("2022-01-02") },
    { id: 3, name: "Transaction 3", value: 35, date: new Date("2022-01-03") },
    { id: 4, name: "Transaction 4", value: 10, date: new Date("2022-01-04") },
  ];

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
        <form onSubmit={handleSubmit(onSubmit)}>
          <Text fontWeight="600" color="rgba(10,10,10,.9)">
            Lista de Pesquisa
          </Text>
          <Div>
            <Input
              placeholder="Insira um nome"
              width="90%"
              type=""
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Input
              placeholder="Data Inicial"
              width="90%"
              type="date"
              value={dateInitial}
              {...register("dateInitial")}
              onChange={(e) => setDateInitial(e.target.value)}
            />

            <Input
              placeholder="Data Final"
              width="90%"
              type="date"
              value={dateFinal}
              {...register("dateFinal")}
              onChange={(e) => setDateFinal(e.target.value)}
            />
            <Button type="submit">OK</Button>
          </Div>
        </form>
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
            <ListaPersonagens resultados={transactions} />
          </Table>
        </Div>
      </Div>
    </Div>
  );
};
