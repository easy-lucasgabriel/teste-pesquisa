import { Text, Input, Column, Div, } from "components";
import Lista from "components/Lista/Lista";
import { usePers } from "hooks";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AxiosResponse } from "axios";
import { api } from "providers";

interface Resultados {
  name: string | number | any | undefined;
}

export const Home = () => {
  const [ pesquisa, setPesquisa ] = useState<Resultados>();
  const { register, handleSubmit } = useForm();
  const { personagens, getAll } = usePers();
  const [ resposta, setResposta ] = useState<AxiosResponse>();
  const [ visible, setVisible ] = useState(false);

  useEffect(() => {
    getAll();
  }, [getAll]);

  const onSubmit = (ev:any) => {
    setPesquisa(ev);
  };

  useEffect(() => {
    if (pesquisa?.name) {
      async function getUserData(search: number): Promise<AxiosResponse> {
        const response = await api.get<Resultados[]>(`people/${search}`);
        return response;
      }
    
      getUserData(pesquisa?.name)
        .then(response => {
          setResposta(response)
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [pesquisa]);


  return (
    <>
      <Div height="20vh" alignItems="center" flexDirection="column">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Column
            width="80%"
            padding="1%"
            height="60%"
            alignItems="left"
            justifyContent="left"
            border="1px solid rgba(0,0,0,.2)"
            borderRadius="3vh"
            backgroundColor="rgba(255,255,255,.9)"
            flexDirection="column"
          >
            <Text fontWeight="bold" color="rgba(10,10,10,.9)">
              Lista de Pesquisa
            </Text>

            <Input
              placeholder=""
              width="90%"
              type=""
              {...register("name")}
            />

            <button type="submit">OK</button>
          </Column>
        </form>
      </Div>

      <Div justifyContent="center" height="75vh" margin="0 auto" width="80%">
        <Column
          width="100%"
          margin="0 auto"
          border="1px solid rgba(0,0,0,.2)"
          padding="1%"
          borderRadius="3vh"
          backgroundColor="rgba(255,255,255,.9)"
        >
          
          {resposta && (
            <Lista props={resposta} />
          )}
          
        </Column>
      </Div>
    </>
  );
};
