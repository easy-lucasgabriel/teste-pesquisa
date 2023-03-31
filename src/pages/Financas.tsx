import { Select, Space } from 'antd';
import axios from 'axios';
import { Text, Input, Div, Button, ListaJogos, Table, Range, ListaPersonagens } from "components";
import { usePers, useDates, useTooDates } from "hooks";
import { RootObject, Loterias } from "interfaces";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {api} from "providers";


export const Financas = () => {
  const [premios,setPremios] = useState([]);
  const [dateInitial, setDateInitial] = useState("");
  const [dateFinal, setDateFinal] = useState("");
  const [aRes, setARes] = useState();
  const [lotas, setLotas] = useState(['']);
  const { register, handleSubmit } = useForm();
  const { resultSearch, getAllDates } = useTooDates();
  const { Option } = Select;
  const [min,setMin] = useState<number>();
  const [max,setMax] = useState<number>();

  const onSubmit = (ev: any) => {
    getAllDates(dateInitial, dateFinal);
  };

  const transactions = [
    { id: 1, name: "Transaction 1", value: 20, date: new Date("2022-01-01") },
    { id: 2, name: "Transaction 2", value: 100, date: new Date("2022-01-02") },
    { id: 3, name: "Transaction 3", value: 35, date: new Date("2022-01-03") },
    { id: 4, name: "Transaction 4", value: 10, date: new Date("2022-01-04") },
  ];

  const [loterias, setLoterias] = useState<Loterias[]>([])

  async function fetchLoterias() {
    const response = await axios.get<Loterias[]>('http://54.76.180.109/api/v2/check_lotteries_available');
    setLoterias(response.data);
  }

  useEffect(() => {
    fetchLoterias();
  }, [])

  const handleChangeLoterias = (value: string[]) => {
    setLotas(value)
  }

  const handleChange = (value: any) => {
    setPremios(value)
   }

   async function fetchPesquisa() {

    if (dateInitial && dateFinal){
      api.get(`54.76.180.109/api/v2/bet/list/report/`,{
        params: {
          created_date_min: dateInitial,
          created_date_max: dateFinal,
          pgtoSource: premios,
          bet_lottery: lotas
        }}
      )
      .then((response) => (setARes(response.data)))
      .catch((error) => (console.log(error)))
    }
  }

  function handleMinChange(name:number) {
    setMin(name)
  }

  function handleMaxChange(name:number) {
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

              <Range onMinChange={handleMinChange} onMaxChange={handleMaxChange}/>
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
                ]}/>

              <Button type="submit" onClick={fetchPesquisa}>OK</Button>
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
            <ListaPersonagens min={min} max={max} resultados={transactions} />
          </Table>
        </Div>
      </Div>
    </Div>
  );
};
