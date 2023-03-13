import {useState} from 'react';
const Lista = (props:any) => {

  // const [order, setOrder] = useState(1);
  // const [columnOrder, setColumnOrder] = useState('height');

  // const handleOrder = (fieldName:any) => {
  //   setOrder(-order)
  //   setColumnOrder(fieldName)
  // }

  // resultado.sort( (a: any, b: any) => {
  //   return a[columnOrder] < b[columnOrder] ? -order : order;
  // } )
  // onClick={ e => handleOrder('height')}
  // onClick={ e => handleOrder('mass')}
  
  const resultado = props.props.data;

  return (
    <div>
      
         <h1>{resultado.name}</h1>
         <p>cor dos olhos: {resultado.eye_color}</p>
         <p>cor do cabelo: {resultado.hair_color}</p>
         <p>cor da pele: {resultado.skin_color}</p>
         <p>altura: {resultado.height}cm</p>
         <p>peso: {resultado.mass}kg</p>
      
    </div>
  ) 
  
};

export default Lista;
