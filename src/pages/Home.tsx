import { Text, Input, Column, Div, Button } from "components";
import Lista from "components/Lista/Lista";
import { useBets, usePers } from "hooks";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AxiosResponse } from "axios";
import { api } from "providers";
import { RootObject } from "interfaces";
import ListaPersonagens from "components/ListaPersonagens/ListaPersonagens";
import ListaJogos from "components/ListaJogos/ListaJogos";

interface Resultados2 {
  name: string | number | any | undefined;
}

export const Home = () => {
  const [ pesquisa, setPesquisa ] = useState<Resultados2>();
  const { register, handleSubmit } = useForm();
  const { personagens, getAll } = usePers();
  const { bets, getTudo } = useBets();
  const [ search, setSearch ] = useState('');
  const [ search1, setSearch1 ] = useState('');
  const [ resposta, setResposta ] = useState<AxiosResponse>();

  useEffect(() => {
    getAll();
  }, [getAll]);

  useEffect(() => {
    getTudo();
  }, [getTudo]);

  const onSubmit = (ev: any) => {
    setPesquisa(ev);
  };

  const searchLoweCase = search.toLocaleLowerCase();
  const searchLoweCase1 = search1.toLocaleLowerCase();

  const busca = personagens.filter( busca => busca.data_content.sending.username.toLowerCase().includes(searchLoweCase));
  const busca1 = bets.filter( busca => busca.username.toLowerCase().includes(searchLoweCase1));

  ////////////////////////////////////////////////////////////////////////////////////////////////////////

  // useEffect(() => {
  //   if (pesquisa?.name) {
  //     async function getUserData(search: number): Promise<AxiosResponse> {
  //       const response = await api.get<RootObject[]>(`people/${search}`);
  //       return response;
  //     }

  //     getUserData(pesquisa?.name)
  //       .then((response) => {
  //         setResposta(response);
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //   }
  // }, [pesquisa]);

  return (
    <main>
      <Div
        height="auto"
        width="78%"
        alignItems="center"
        margin="0 auto"
        border="1px solid rgba(0,0,0,.2)"
        padding="1%"
        borderRadius="3vh"
        backgroundColor="rgba(255,255,255,.9)"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Text fontWeight="600" color="rgba(10,10,10,.9)">
            Lista de Pesquisa
          </Text>
          <Div>
            <Input 
            placeholder="Finanças" 
            width="90%" 
            type="" 
            {...register("financa")} 
            value={search} 
            onChange={(e) => setSearch(e.target.value)}
            />
            <Button type="submit">OK</Button>
          </Div>

          <Div>
            <Input 
            placeholder="Jogos" 
            width="90%" 
            type="" 
            {...register("jogos")} 
            value={search1} 
            onChange={(e) => setSearch1(e.target.value)}
            />
            <Button type="submit">OK</Button>
          </Div>
        </form>
      </Div>

      <Div justifyContent="center" height="auto" margin="0 auto" width="80%">
        <Column
          width="100%"
          margin="0 auto"
          border="1px solid rgba(0,0,0,.2)"
          padding="1%"
          borderRadius="3vh"
          backgroundColor="rgba(255,255,255,.9)"
        >
          {resposta && <Lista props={resposta} />}

          <div>
            <h1>Lista das Finanças</h1>
            <ListaPersonagens resultados={busca} />
          </div>

          <div>
            <h1>Lista dos Jogos</h1>
            <ListaJogos results={busca1} />
          </div>
        </Column>
      </Div>
    </main>
  );
};
