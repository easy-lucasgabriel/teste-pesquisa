import { Text, Input, Column } from "components";
import { usePers } from "hooks";
import { useEffect, useState } from "react";

export const Home = () => {
  const [text, setText] = useState("");
  const { personagens, getAll } = usePers();

  useEffect(() => {
    getAll();
  }, [getAll]);

  console.log(personagens);

  return (
    <Column width="50%" margin="0 auto" height="20vh" alignItems="center">
      <Text fontWeight="bold">Lista de Pesquisa</Text>

      <Input
        placeholder=""
        type=""
        onChange={(e: any) => setText(e.target.value)}
      />
      {text}
    </Column>
  );
};
