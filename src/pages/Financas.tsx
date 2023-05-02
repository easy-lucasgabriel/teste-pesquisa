import { Select, Space } from 'antd';
import { Text, Input, Div, Button, Table, Range, ListaFinancas } from "components";
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
  const [search, setSearch] = useState('');
  const { register, handleSubmit } = useForm();
  const { resultSearch, getAllDates } = useTooDates();
  const { Option } = Select;
  const [min, setMin] = useState<number>();
  const [max, setMax] = useState<number>();

  const transactions = [
    { id: 1, name: "Lucas Gabriel dos Santos", value: 20, date: new Date("2022-01-01") },
    { id: 2, name: "Maria do BBB", value: 100, date: new Date("2022-01-02") },
    { id: 3, name: "Pedro Silveira da Cunha Neto" , value: 35, date: new Date("2022-01-03") },
    { id: 4, name: "João Paulo", value: 10, date: new Date("2022-01-04") },
  ];

  const userEmail = [
    { id: 1, email: 'andremerli74@gmail.com	' },
    { id: 2, email: 'zxhbpg@jmurip.com' },
    { id: 3, email: 'pmlxew@veracg.com' },
    { id: 4, email: 'fabiosilvarodolpho@gmail.com	' },
    { id: 5, email: 'feliperepresentante@yahoo.com.br	' },
    { id: 6, email: 'fernando.financeiro@Yahoo.com.br' },
    { id: 7, email: 'fernandopontes@outlook.com' },
    { id: 8, email: 'dlima99@bol.com.br' },
    { id: 9, email: 'larissahbaldoino@gmail.com' },
    { id: 10, email: 'mark3qf527@hotmail.com	' },
  ];

  const searchLowerCase = search.toLocaleLowerCase();

  const busca = userEmail.filter(busca => busca.email.toLocaleLowerCase().includes(searchLowerCase));

  function handleChangeEmail(value: any) {
    const selectedEmail = userEmail.find((busca) => busca.email === value);
    setEmail(selectedEmail?.email);
    setId(selectedEmail?.id);
  }
  console.log('Valores selecionados:', id, 'Email selecionado: ', email);

  useEffect(() => {
    getTudo();
  }, [])

  const handleChangeLoterias = (value: any) => {
    setLotas(value)
  }

  const handleChange = (value: any) => {
    setPremios(value)
  }

  function handleMinChange(name: number) {
    setMin(name)
  }

  function handleMaxChange(name: number) {
    setMax(name)
  }

  const onSubmit = (ev: any) => {

    if (dateInitial && dateFinal) {
      getAllDates(dateInitial, dateFinal, premios, lotas)
    } else {
      window.alert("insira uma data inicial e uma final")
    }
  };

 console.log(id);
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
          <Div
            width="100%"
            flexDirection="column"
          >
            <Div
              width="50%">

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

            <Div
              width="50%"
              justifyContent="space-between">

              <Range onMinChange={handleMinChange} onMaxChange={handleMaxChange} />
            </Div>

            <Div
              width="100%"
              justifyContent="flex-start"
            >
              <Select
                mode='multiple'
                style={{ minWidth: '30%' }}
                placeholder="Loterias"
                onChange={handleChangeLoterias}
                optionLabelProp="label"
              >
                {lotteries.map((loterias: any) => (
                  <Option key={loterias.id} value={loterias.lottery_type} name={loterias.name}>
                    <Space>{loterias.lottery_type}</Space>
                  </Option>
                ))};
              </Select>

              <Select
                placeholder='Premiada'
                style={{
                  width: 120,
                }}
                onChange={handleChange}
                options={[
                  {
                    value: '1',
                    label: 'Entrada',
                  },
                  {
                    value: '2',
                    label: 'Saida',
                  }
                ]} />

              <Select
                showSearch
                style={{
                  width: 230
                }}
                placeholder="Usuário"
                onChange={handleChangeEmail}
                value={""}
              >
                {busca.map((email) => (
                  <Option key={email.id} value={email.email}>
                    <Space>{email.email}</Space>
                  </Option>
                ))}
              </Select>

              <Button type="submit" onClick={onSubmit}>OK</Button>
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
            <ListaFinancas min={min} max={max} resultados={transactions} />
          </Table>
        </Div>
      </Div>
    </Div>
  );
};
