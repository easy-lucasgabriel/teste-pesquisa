import { Text, Input, Column, Div } from "components";
import { usePers } from "hooks";
import { useEffect, useState } from "react";

export const Home = () => {
  const [text, setText] = useState("");
  const { personagens, getAll } = usePers();

  useEffect(() => {
    getAll();
  }, [getAll]);

  personagens.map(data => {
    console.log(data.name);
  });

  return (
    <>
      <Div height="20vh" alignItems="center" flexDirection="column">
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
            onChange={(e: any) => setText(e.target.value)}
          />
        </Column>
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
        </Column>
      </Div>
    </>
  );
};
