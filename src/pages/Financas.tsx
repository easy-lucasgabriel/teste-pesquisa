import { Select, Space } from "antd";
import {
  Text,
  Input,
  Div,
  Button,
  Table,
  Range,
  ListaPersonagens,
} from "components";
import { useTooDates, useLotteries } from "hooks";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export const Financas = () => {
  const [dateInitial, setDateInitial] = useState("");
  const [dateFinal, setDateFinal] = useState("");
  const { lotteries, getTudo } = useLotteries();
  const [premios, setPremios] = useState([]);
  const [lotas, setLotas] = useState();
  const [email, setEmail] = useState<any>();
  const [id, setId] = useState<number>();
  const [search, setSearch] = useState("");
  const { register, handleSubmit } = useForm();
  const { resultSearch, getAllDates } = useTooDates();
  const { Option } = Select;
  const [min, setMin] = useState<number>();
  const [max, setMax] = useState<number>();

  const userEmail = [
    { id: 1, email: "andremerli74@gmail.com	" },
    { id: 2, email: "zxhbpg@jmurip.com" },
    { id: 3, email: "pmlxew@veracg.com" },
    { id: 4, email: "fabiosilvarodolpho@gmail.com	" },
    { id: 5, email: "feliperepresentante@yahoo.com.br	" },
    { id: 6, email: "fernando.financeiro@Yahoo.com.br" },
    { id: 7, email: "fernandopontes@outlook.com" },
    { id: 8, email: "dlima99@bol.com.br" },
    { id: 9, email: "larissahbaldoino@gmail.com" },
    { id: 10, email: "mark3qf527@hotmail.com	" },
    { id: 11, email: "user11@example.com" },
    { id: 12, email: "user12@example.com" },
    { id: 13, email: "user13@example.com" },
    { id: 14, email: "user14@example.com" },
    { id: 15, email: "user15@example.com" },
    { id: 16, email: "user16@example.com" },
    { id: 17, email: "user17@example.com" },
    { id: 18, email: "user18@example.com" },
    { id: 19, email: "user19@example.com" },
    { id: 20, email: "user20@example.com" },
    { id: 21, email: "user21@example.com" },
    { id: 22, email: "user22@example.com" },
    { id: 23, email: "user23@example.com" },
    { id: 24, email: "user24@example.com" },
    { id: 25, email: "user25@example.com" },
    { id: 26, email: "user26@example.com" },
    { id: 27, email: "user27@example.com" },
    { id: 28, email: "user28@example.com" },
    { id: 29, email: "user29@example.com" },
    { id: 30, email: "user30@example.com" },
    { id: 31, email: "user31@example.com" },
    { id: 32, email: "user32@example.com" },
    { id: 33, email: "user33@example.com" },
    { id: 34, email: "user34@example.com" },
    { id: 35, email: "user35@example.com" },
    { id: 36, email: "user36@example.com" },
    { id: 37, email: "user37@example.com" },
    { id: 38, email: "user38@example.com" },
    { id: 39, email: "user39@example.com" },
    { id: 40, email: "user40@example.com" },
  ];

  const searchLowerCase = search.toLocaleLowerCase();

  const busca = userEmail.filter((busca) =>
    busca.email.toLocaleLowerCase().includes(searchLowerCase)
  );

  function handleChangeEmail(value: any) {
    const selectedEmail = userEmail.find((busca) => busca.email === value);
    setEmail(selectedEmail?.email);
    setId(selectedEmail?.id);
  }

  useEffect(() => {
    getTudo();
  }, []);

  const handleChangeLoterias = (value: any) => {
    setLotas(value);
  };

  const handleChange = (value: any) => {
    setPremios(value);
  };

  function handleMinChange(name: number) {
    setMin(name);
  }

  function handleMaxChange(name: number) {
    setMax(name);
  }

  const onSubmit = () => {
    if (dateInitial && dateFinal) {
      getAllDates(dateInitial, dateFinal, premios, lotas);
    } else {
      window.alert("insira uma data inicial e uma final");
    }
  };

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
          onSubmit={handleSubmit(onSubmit)}
          width="100%"
          flexDirection="column"
        >
          <Text fontWeight="600" color="rgba(10,10,10,.9)">
            Lista de Pesquisa
          </Text>
          <Div width="100%" flexDirection="column">
            <Div width="50%">
              <Input
                placeholder="Data Inicial"
                width="50%"
                type="date"
                value={dateInitial}
                {...register("dateInitial")}
                onChange={(e) => setDateInitial(e.target.value)}
              />

              <Input
                placeholder="Data Final"
                width="50%"
                type="date"
                value={dateFinal}
                {...register("dateFinal")}
                onChange={(e) => setDateFinal(e.target.value)}
              />
            </Div>

            <Div width="50%" justifyContent="space-between">
              <Range
                onMinChange={handleMinChange}
                onMaxChange={handleMaxChange}
              />
            </Div>

            <Div width="100%" justifyContent="flex-start">
              <Select
                mode="multiple"
                style={{ minWidth: "30%" }}
                placeholder="Loterias"
                onChange={handleChangeLoterias}
                optionLabelProp="label"
              >
                {lotteries.map((loterias: any) => (
                  <Option
                    key={loterias.id}
                    value={loterias.lottery_type}
                    name={loterias.name}
                  >
                    <Space>{loterias.lottery_type}</Space>
                  </Option>
                ))}
                ;
              </Select>

              <Select
                placeholder="Premiada"
                style={{
                  width: 120,
                }}
                onChange={handleChange}
                options={[
                  {
                    value: "1",
                    label: "Entrada",
                  },
                  {
                    value: "2",
                    label: "Saida",
                  },
                ]}
              />

              <Select
                showSearch
                style={{
                  width: 230,
                }}
                placeholder="Usuário"
                onChange={handleChangeEmail}
                value={email}
              >
                {busca.map((email) => (
                  <Option key={email.id} value={email.email}>
                    <Space>{email.email}</Space>
                  </Option>
                ))}
              </Select>

              <Button type="submit" onClick={onSubmit}>
                OK
              </Button>
            </Div>
          </Div>
        </Div>
      </Div>

      <Div
        justifyContent="center"
        height="auto"
        margin="0 auto"
        width="92%"
        backgroundColor="rgba(255,255,255,.9)"
      >
        <Div minHeight="85vh" alignItems="center">
          <Table flexDirection="column">
            <h2>Lista das Finanças</h2>
            <ListaPersonagens min={min} max={max} resultados={resultSearch} />
          </Table>
        </Div>
      </Div>
    </Div>
  );
};
