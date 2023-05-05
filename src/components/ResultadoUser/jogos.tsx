import { Tr, Th, Td, Div, Button, Text } from "components";
import { Modal } from "antd";

export function Jogos() {
  return (
    <Div flexDirection="column"
      width="100%"
    >
      <Tr
        height="4vh"
        backgroundColor="rgba(0,0,0,0.05)"
        textAlign="left"
      >
        <Th>Data de criação</Th>
        <Th>Data da Loteria</Th>
        <Th>Número do jogo</Th>
        <Th>Status</Th>
        <Th>Exibir mensagem</Th>
      </Tr>
      <Tr
        height="4vh"
        backgroundColor="rgba(0,0,0,0.05)"
        textAlign="left"
      >
        <Td>Data de criação</Td>
        <Td>Data da Loteria</Td>
        <Td>Número do jogo</Td>
        <Td>Status</Td>
        <Td>Exibir mensagem</Td>
      </Tr>
    </Div>
  )
}