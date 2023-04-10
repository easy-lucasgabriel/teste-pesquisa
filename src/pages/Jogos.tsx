import { Pagination, Select, Space } from 'antd';
import { SelectProps } from 'antd/lib/select';
import { Text, Input, Div, Button, ListaJogos, Table, Range } from "components";
import { useDates } from "hooks";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Loterias } from "interfaces";
import { api } from 'providers';

export const Jogos = () => {
  const [loterias, setLoterias] = useState<Loterias[]>([]);
  const [dateInitial, setDateInitial] = useState("");
  const [dateFinal, setDateFinal] = useState("");
  const [premios, setPremios] = useState([]);
  const [lotas, setLotas] = useState();
  const [email, setEmail] = useState<any>();
  const [id, setId] = useState<number>();
  const [search, setSearch] = useState('');
  const { resultSearch, getAllDates } = useDates();
  const { Option } = Select;
  const [min, setMin] = useState<number>();
  const [max, setMax] = useState<number>();
  const { handleSubmit } = useForm();

  const userEmail = [
    { id: 1, email: 'auser1@example.com' },
    { id: 2, email: 'buser2@example.com' },
    { id: 3, email: 'cuser3@example.com' },
    { id: 4, email: 'duser4@example.com' },
    { id: 5, email: 'euser5@example.com' },
    { id: 6, email: 'user6@example.com' },
    { id: 7, email: 'user7@example.com' },
    { id: 8, email: 'user8@example.com' },
    { id: 9, email: 'user9@example.com' },
    { id: 10, email: 'user10@example.com' },
    { id: 11, email: 'user11@example.com' },
    { id: 12, email: 'user12@example.com' },
    { id: 13, email: 'user13@example.com' },
    { id: 14, email: 'user14@example.com' },
    { id: 15, email: 'user15@example.com' },
    { id: 16, email: 'user16@example.com' },
    { id: 17, email: 'user17@example.com' },
    { id: 18, email: 'user18@example.com' },
    { id: 19, email: 'user19@example.com' },
    { id: 20, email: 'user20@example.com' },
    { id: 21, email: 'user21@example.com' },
    { id: 22, email: 'user22@example.com' },
    { id: 23, email: 'user23@example.com' },
    { id: 24, email: 'user24@example.com' },
    { id: 25, email: 'user25@example.com' },
    { id: 26, email: 'user26@example.com' },
    { id: 27, email: 'user27@example.com' },
    { id: 28, email: 'user28@example.com' },
    { id: 29, email: 'user29@example.com' },
    { id: 30, email: 'user30@example.com' },
    { id: 31, email: 'user31@example.com' },
    { id: 32, email: 'user32@example.com' },
    { id: 33, email: 'user33@example.com' },
    { id: 34, email: 'user34@example.com' },
    { id: 35, email: 'user35@example.com' },
    { id: 36, email: 'user36@example.com' },
    { id: 37, email: 'user37@example.com' },
    { id: 38, email: 'user38@example.com' },
    { id: 39, email: 'user39@example.com' },
    { id: 40, email: 'user40@example.com' },
  ];

  const searchLowerCase = search.toLocaleLowerCase();

  const busca = userEmail.filter(busca => busca.email.toLocaleLowerCase().includes(searchLowerCase));

  const transactions = [
    { id: 1, name: "Transaction 1", value: 20, date: new Date("2022-01-01") },
    { id: 2, name: "Transaction 2", value: 100, date: new Date("2022-01-02") },
    { id: 3, name: "Transaction 3", value: 35, date: new Date("2022-01-03") },
    { id: 4, name: "Transaction 4", value: 10, date: new Date("2022-01-04") },
  ];

  async function fetchLoterias() {
    const response = await api.get<Loterias[]>('/check_lotteries_available');
    setLoterias(response.data);
  }

  useEffect(() => {
    fetchLoterias();
  }, [])

  function handleChangeEmail(value: any, option:any) {

    const selectedIndex = option.key;
    setEmail (busca[selectedIndex].email)

    setId(value);
  }
  console.log('Valores selecionados:', id, 'Email selecionado: ', email);


  const handleChangeLoterias = (value: any) => {
    setLotas(value)
  }

  const handleChange = (value: any) => {
    setPremios(value)
  }

  const onSubmit = (ev: any) => {

    if (dateInitial && dateFinal) {
      getAllDates(dateInitial, dateFinal, premios, lotas)
    } else {
      window.alert("insira uma data inicial e uma final")
    }
  };

  function handleMinChange(name: number) {
    setMin(name)
  }

  function handleMaxChange(name: number) {
    setMax(name)
  }

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
                onChange={(e) => setDateInitial(e.target.value)}
              />
              <Input
                placeholder="Data Final"
                width="50%"
                type="date"
                value={dateFinal}
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
                {loterias.map((loterias) => (
                  <Option key={loterias.id} value={loterias.lottery_type} name={loterias.name}>
                    <Space>{loterias.lottery_type}</Space>
                  </Option>
                ))};
              </Select>

              <Select
                placeholder="Premiada"
                style={{
                  width: 120,
                }}
                onChange={handleChange}
                options={[
                  {
                    value: '1',
                    label: 'Winning',
                  },
                  {
                    value: '0',
                    label: 'Credit',
                  }
                ]}
              />

              <Select
                showSearch
                style={{
                  width: 230
                }}
                placeholder="Usuário"
                onChange={handleChangeEmail}
                value={email}
              >
                {busca.map((email) => (
                  <Option key={email.email} value={email.id}>
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
            <h2>Lista dos Jogos</h2>
            <ListaJogos min={min} max={max} results={transactions} />
            <Pagination defaultCurrent={0} total={50} />
          </Table>
        </Div>
      </Div>
    </Div>
  );
};
