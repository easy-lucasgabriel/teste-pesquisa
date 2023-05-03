import { Div, Text, Input, Button, ResultadoUser } from "components";

export function DadosUsuario() {
    return (
        <Div
        width="95%"
        flexDirection="column"
        >
            <Div
                flexWrap="wrap"
                flexDirection="column"
                justifyContent="space-evenly"
                padding="2vh"
            >
                <Div
                    width="95%"
                    marginTop="2.5vh"
                    marginBottom="2vh"
                >
                    <Div width="45%" flexDirection="column" marginRight="2vw">
                        <Text color="black" textAlign="left">Nome</Text>
                        <Input width="100%" value='pedro' disabled />
                    </Div>

                    <Div width="45%" flexDirection="column">
                        <Text color="black" textAlign="left">Email</Text>
                        <Input width="100%" value='pedro123@gmail.com' disabled />
                    </Div>
                </Div>

                <Div
                    width="95%"
                    marginBottom="2vh"
                >
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
                </Div>

                <Div height="7vh" width="95%" alignItems="center" >
                    <Div width="25%" flexDirection="column">
                        <Text textAlign="left">Data de inicio</Text>
                        <Input value=''
                            type="date"
                        />
                    </Div>

                    <Div width="25%" flexDirection="column" marginRight="25vw">
                        <Text textAlign="left">Data Final</Text>
                        <Input value=''
                            type="date"
                        />
                    </Div>
                    <Button type="submit">Filtrar</Button>
                </Div>
            </Div>
        </Div>
    )
}


