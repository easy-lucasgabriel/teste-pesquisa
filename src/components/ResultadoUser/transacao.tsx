import { Tr, Th, Td, Div, Button, Text } from "components";
import { Modal } from "antd";

export function Transacao() {
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
        <Th>Tipo da Transação</Th>
        <Th>Status</Th>
        <Th>Valor</Th>
        <Th>Exibir mensagem</Th>
      </Tr>
      <Tr
        height="4vh"
        backgroundColor="rgba(0,0,0,0.05)"
        textAlign="left"
      >
        <Td>Data de criação</Td>
        <Td>Tipo da Transação</Td>
        <Td>Status</Td>
        <Td>Valor</Td>
        <Td>Exibir mensagem</Td>
      </Tr>
    </Div>
  )
}