import { Div, Text, Input, Button, Table, DadosUsuario, ResultadoUser } from "components";
import { useState } from "react";

    const dados = [
        'Pedro',
        'Lucas',
        'Helena',
        'Theo',
        'Laura',
        'Samuel',
        'Fernando'
    ]

export const Atendimento = () => {

        const [busca, setBusca] = useState();
        console.log('busca');

        const [buscaConcluida, setBuscaConcluida] = useState<boolean>(false);

    return (
        <Div width="85%" flexDirection="column">
            <Div
                height="auto"
                width="90%"
                alignItems="center"
                margin="0 auto"
                border="1px solid rgba(0,0,0,.2)"
                padding="1%"
                backgroundColor="rgba(255,255,255,.9)"
            >
                <Div
                    // onSubmit=
                    width="100%"
                    flexDirection="column"
                >
                    <Text fontWeight="600" color="rgba(10,10,10,.9)">
                        Menu de Atendimento
                    </Text>
                    <Div
                        width="100%"
                        flexDirection="column"
                    >
                        <Div
                            width="80%">

                            <Input
                                placeholder="Insira um dado sobre o usuario"
                                width="80%"
                                value={busca}
                                // onChange=''
                            />
                            <Button type="submit" onClick={setBuscaConcluida(true)}>Pesquisar</Button>
                        </Div>
                    </Div>
                </Div>
            </Div>
            { buscaConcluida ? (
                <Div
                height="auto"
                margin="0 auto"
                width="92%"
                backgroundColor="rgba(255,255,255,.9)"
            >
                <Div minHeight="40vh" alignItems="center">
                    <Div flexDirection="column">
                        <DadosUsuario
                        // min='' 
                        // max='' 
                        // resultados='' 
                        />
                    </Div>
                </Div>
            </Div>
            ) : (
                <></>
            )}
        </Div>
    )
};
