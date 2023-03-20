import { Text, Input, Div, Button, ListaJogos, Table } from "components";
import { useBets, useDates } from "hooks";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export const Jogos = () => {
  const { bets, getTudo } = useBets();
  const [search, setSearch] = useState("");
  const [dateInitial, setDateInitial] = useState("");
  const [dateFinal, setDateFinal] = useState("");
  const { register, handleSubmit } = useForm();
  const { resultSearch, getAllDates } = useDates();

  useEffect(() => {
    getTudo();
  }, [getTudo]);

  const onSubmit = (ev: any) => {
    getAllDates(dateInitial, dateFinal);
  };


  const searchLoweCase = search.toLocaleLowerCase();

  const busca = bets.filter((busca) =>
    busca.username.toLowerCase().includes(searchLoweCase)
  );

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
            <h2>Lista dos Jogos</h2>
            <ListaJogos results={busca} />
          </Table>
        </Div>
      </Div>
    </Div>
  );
};
