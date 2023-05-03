import { Div, Text, Input, Button } from "components";
import { Link } from "react-router-dom";
import { Mensagens, Extrato, Jogos, Transacao } from "./index";
import { useState } from "react";
import { type } from "os";

export function ResultadoUser() {

    const componentes: { [key: string]: React.FC } = {
        "Mensagens": Mensagens,
        "Extrato": Extrato,
        "Jogos": Jogos,
        "Transacao": Transacao
    }
    const [componenteSelecionado, setComponenteSelecionado] = useState<React.FC>(Mensagens);


    const handleButtonClick = (nomeBotao: keyof typeof componentes) => {
        setComponenteSelecionado(componentes[nomeBotao]);
    };

    return (
        <Div
            width="100%"
            flexDirection="column"
        >

            <Div
                width="78.2vw"
                height="15vh"
                alignItems="center"
                backgroundColor="white"
                justifyContent="space-evenly"
            >
                <Div
                    width="13%"
                    height="10vh"
                    justifyContent="space-evenly"
                    color="000"
                    flexDirection="column"
                    alignItems="center"
                    border="0.5vh solid #ebeeee "
                    borderRadius="1vh"
                >
                    <Text fontSize="2vh">Total de Apostas</Text>
                    <Text fontSize="2vh">R$ 0,00</Text>
                </Div>
                <Div
                    width="13%"
                    height="10vh"
                    justifyContent="space-evenly"
                    color="000"
                    flexDirection="column"
                    alignItems="center"
                    border="0.5vh solid #ebeeee "
                    borderRadius="1vh"
                >
                    <Text fontSize="2vh">Total de Prêmio</Text>
                    <Text fontSize="2vh">R$ 0,00</Text>
                </Div>
                <Div
                    width="13%"
                    height="10vh"
                    justifyContent="space-evenly"
                    color="000"
                    flexDirection="column"
                    alignItems="center"
                    border="0.5vh solid #ebeeee "
                    borderRadius="1vh"
                >
                    <Text fontSize="2vh">Entrada</Text>
                    <Text fontSize="2vh">R$ 0,00</Text>
                </Div>
                <Div
                    width="13%"
                    height="10vh"
                    justifyContent="space-evenly"
                    color="000"
                    flexDirection="column"
                    alignItems="center"
                    border="0.5vh solid #ebeeee "
                    borderRadius="1vh"
                >
                    <Text fontSize="2vh">Saída</Text>
                    <Text fontSize="2vh">R$ 0,00</Text>
                </Div>
            </Div>

            <Div>
                <Button onClick={() => handleButtonClick("Mensagens")}>
                    Mensagens
                </Button>
                <Button onClick={() => handleButtonClick("Extrato")}>
                    Extrato
                </Button>
                <Button onClick={() => handleButtonClick("Transacao")}>
                    Transação Financeira
                </Button>
                <Button onClick={() => handleButtonClick("Jogos")}>
                    Bets
                </Button>
            </Div>

            <Div>
                {componenteSelecionado}
            </Div>
        </Div>
    )
}


