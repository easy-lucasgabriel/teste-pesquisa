import { Pagination, Select, Space } from 'antd';
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
  const { resultSearch, getAllDates } = useDates();
  const { Option } = Select;
  const [min,setMin] = useState<number>();
  const [max,setMax] = useState<number>();
  const { handleSubmit } = useForm();

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

  useEffect(()=>{
    fetchLoterias();
  },[])

  const handleChangeLoterias = (value: any) => {
    setLotas(value)
  }

  const handleChange = (value: any) => {
   setPremios(value)
  }

  const onSubmit = (ev: any) => {
    
    if(dateInitial && dateFinal){
      getAllDates(dateInitial,dateFinal,premios,lotas)
    }else{
      window.alert("insira uma data inicial e uma final")
    }
  };

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
