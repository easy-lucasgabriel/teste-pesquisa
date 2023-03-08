import { Text, Input, Column } from 'components';

export const Home = () =>{
  return (
    <Column width="50%" margin="0 auto" height="20vh">
    <Text fontWeight='bold'>Lista de Pesquisa</Text>
    <Input placeholder='Pesquise algo Aqui'/>
    </Column> 
  )
}