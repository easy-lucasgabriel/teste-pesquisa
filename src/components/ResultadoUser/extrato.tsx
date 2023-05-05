import { Tr, Th, Td, Div, Button, Text } from "components";
import { Modal } from "antd";

export function Extrato() {
  return (
    <Div flexDirection="column"
      width="100%"
    >
      <Tr
        height="4vh"
        backgroundColor="rgba(0,0,0,0.05)"
        textAlign="left"
      >
        <Th>Data</Th>
        <Th>Tópico</Th>
        <Th>mensagem</Th>
      </Tr>
      <Tr
        height="4vh"
        backgroundColor="rgba(0,0,0,0.05)"
        textAlign="left"
      >
        <Td>Data</Td>
        <Td>Tópico</Td>
        <Td>Exibir mensagem</Td>
      </Tr>
    </Div>
  )
}


