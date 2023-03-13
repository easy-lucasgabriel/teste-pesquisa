import { Text, Input, Column, Div, Button } from "components";
import Lista from "components/Lista/Lista";
import { usePers } from "hooks";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AxiosResponse } from "axios";
import { api } from "providers";
import { Resultados } from "interfaces";
import ListaPersonagens from "components/ListaPersonagens/ListaPersonagens";

interface Resultados2 {
  name: string | number | any | undefined;
}

export const Home = () => {
  const [pesquisa, setPesquisa] = useState<Resultados2>();
  const { register, handleSubmit } = useForm();
  const { personagens, getAll } = usePers();
  const [resposta, setResposta] = useState<AxiosResponse>();
  const [pers, setPersonagens] = useState<Resultados[]>([]);
  const [gente, setGente] = useState<Resultados[]>([]);

  useEffect(() => {
    getAll();
  }, [getAll]);

  const onSubmit = (ev: any) => {
    setPesquisa(ev);
  };

  ////////////////////////////////////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    if (pesquisa?.name) {
      async function getUserData(search: number): Promise<AxiosResponse> {
        const response = await api.get<Resultados[]>(`people/${search}`);
        return response;
      }

      getUserData(pesquisa?.name)
        .then((response) => {
          setResposta(response);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [pesquisa]);

  ///////////////////////////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    const getPeople = async () => {
      const allPeople: Resultados[] = [];
      let nextUrl = "https://swapi.dev/api/people/";
      while (nextUrl !== null) {
        const response = await api.get(nextUrl);
        allPeople.push(...response.data.results);
        nextUrl = response.data.next;
      }
      setGente(allPeople);
    };
    getPeople();
  }, []);

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
            <Input placeholder="" width="90%" type="" {...register("name")} />
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
            <h1>Personagens do Star Wars</h1>
            <ListaPersonagens resultados={gente} />
          </div>
        </Column>
      </Div>
    </main>
  );
};
