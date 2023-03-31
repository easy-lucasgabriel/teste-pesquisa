import {Button, Column, Div} from 'components';
import { Link } from 'react-router-dom';
 

export const Menu = () => {
  return (
    <>
    <Column
      width="15%"
      height="auto"
  
      >
      <Div
        width="100%"
        flexDirection="column"
        alignItems="center"
        margin="0 auto"
        border="1px solid rgba(0,0,0,.2)"
        padding="1%"
        justifyContent="flex-start"
        backgroundColor="rgba(255,255,255,.9)"
      >
        <Link to="/results-jogos"><Button>Lista de Jogos</Button></Link>
        <Link to="/results-financas"><Button>Lista de Finanças</Button></Link>
      </Div>
      </Column>
      </>
  )
}
