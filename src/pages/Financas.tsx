import { Text, Input, Column, Div, Button, ListaPersonagens } from "components";
import { usePers } from "hooks";
import { useEffect, useState } from "react";

interface Resultados2 {
  name: string | number | any | undefined;
}

export const Financas = () => {
  const { personagens, getAll } = usePers();
  const [ search, setSearch ] = useState('');

  useEffect(() => {
    getAll();
  }, [getAll]);

  const searchLoweCase = search.toLocaleLowerCase();

  const busca = personagens.filter( busca => busca.data_content.sending.username.toLowerCase().includes(searchLoweCase));

  return (
    <Div
    width="85%"
    flexDirection="column"
    >
      <Div
        height="auto"
        width="90%"
        alignItems="center"
        margin="0 auto"
        border="1px solid rgba(0,0,0,.2)"
        padding="1%"
        backgroundColor="rgba(255,255,255,.9)"
      >
        <form>
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
            <Button type="submit">OK</Button>
          </Div>

        </form>
      </Div>

      <Div justifyContent="center" height="auto" margin="0 auto" width="92%">
        <Column
          width="100%"
          margin="0 auto"
          border="1px solid rgba(0,0,0,.2)"
          padding="1%"
          backgroundColor="rgba(255,255,255,.9)"
        >

          <Div
          flexDirection="column"
          minHeight="80vh"
          width="100%"
          >
            <h1>Lista das Finanças</h1>
            <ListaPersonagens resultados={busca} />
          </Div>

        </Column>
      </Div>
    </Div>
  );
};
