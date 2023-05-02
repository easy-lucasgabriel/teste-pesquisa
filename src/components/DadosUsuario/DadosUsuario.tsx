import { Div, Text, Input, Button } from "components";

export function DadosUsuario() {
    return (
        <Div
            flexWrap="wrap"
            padding="3vh"
        >
            <Div width="45%" flexDirection="column" marginRight="2vw">
                <Text color="black" textAlign="left">Nome</Text>
                <Input width="100%" value='pedro' disabled />
            </Div>

            <Div width="45%" flexDirection="column">
                <Text color="black" textAlign="left">Email</Text>
                <Input width="100%" value='pedro123@gmail.com' disabled />
            </Div>

            <Div width="25%" flexDirection="column" marginRight="2vw">
                <Text color="black" textAlign="left">Telefone</Text>
                <Input width="100%" value='4002-8922' disabled />
            </Div>

            <Div width="25%" flexDirection="column" marginRight="2vw">
                <Text color="black" textAlign="left">Saldo em Créditos</Text>
                <Input width="100%" value='10.000' disabled />
            </Div>

            <Div width="25%" flexDirection="column" >
                <Text color="black" textAlign="left">Saldo de Prêmios</Text>
                <Input width="100%" value='25.000' disabled />
            </Div>

            <Div width="100%"
            bg='red'>
                <Div width="25%" flexDirection="column">
                    <Text textAlign="left">Data de inicio</Text>
                    <Input value=''
                        type="date"
                    />
                </Div>

                <Div width="25%" flexDirection="column">
                    <Text textAlign="left">Data Final</Text>
                    <Input value=''
                        type="date"
                    />

                    <Button width="20%" type="submit">Filtrar</Button>
                </Div>
            </Div>
        </Div>
    )
}