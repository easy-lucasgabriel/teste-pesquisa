import { Div } from "components";

export const Error = () => {
  return (
    <Div
      height="95.5vh"
      width="78%"
      alignItems="center"
      margin="0 auto"
      border="1px solid rgba(0,0,0,.2)"
      padding="1%"
      justifyContent="center"
      backgroundColor="rgba(255,255,255,.9)"
      flexDirection="column"
      lineHeight="20vh"
    >
      <Div fontSize="8vh">Erro!</Div>
      <Div fontSize="30vh">404</Div>
      <Div fontSize="8vh" textAlign="center">Página não encontrada</Div>
    </Div>
  );
};
