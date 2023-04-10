import { Select, Space } from 'antd';
import { Text, Input, Div, Button, Table, Range, ListaPokes } from "components";
import { useLotteries, usePokes } from "hooks";
import { PageTypes, Result } from 'interfaces';
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";


export const Pokes = () => {
  const [prev,setPrev] = useState();
  const [count,setCount] = useState();
  const { lotteries, getTudo } = useLotteries();
  const [premios, setPremios] = useState([]);
  const [lotas, setLotas] = useState();
  const { register, handleSubmit } = useForm();
  const { pokes, getPokes } = usePokes();
  const { Option } = Select;
  const [min,setMin] = useState<number>();
  const [max,setMax] = useState<number>();

  const transactions = [
    { id: 1, name: "Transaction 1", value: 20, date: new Date("2022-01-01") },
    { id: 2, name: "Transaction 2", value: 100, date: new Date("2022-01-02") },
    { id: 3, name: "Transaction 3", value: 35, date: new Date("2022-01-03") },
    { id: 4, name: "Transaction 4", value: 10, date: new Date("2022-01-04") },
  ];

  useEffect(() => {
    getTudo();
  }, [])

  const handleChangeLoterias = (value: any) => {
    setLotas(value)
  }

  const handleChange = (value: any) => {
    setPremios(value)
   }

  function handleMinChange(name:number) {
    setMin(name)
  }

  function handleMaxChange(name:number) {
    setMax(name)
  }

  const onSubmit = (ev: any) => {
    
    if(prev && count){
      getPokes(prev,count)
    }else{
      window.alert("insira os dados")
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
          <Div
            width="100%"
            flexDirection="column"
          >
            <Div
              width="50%">

              <Input
                placeholder="Página de referência"
                width="50%"
                type="value"
                value={prev}
                {...register("dateInitial")}
                onChange={(e:any) => setPrev(e.target.value)}
              />

              <Input
                placeholder="Quantidade de pokémon"
                width="50%"
                type="value"
                value={count}
                {...register("dateFinal")}
                onChange={(e:any) => setCount(e.target.value)}
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
                {lotteries.map((loterias:any) => (
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
                ]}/>

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
            <ListaPokes min={min} max={max} resultados={pokes}/> 
          </Table>
        </Div>
      </Div>
    </Div>
  );
};
