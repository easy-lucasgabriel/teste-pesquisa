
const Lista = (props:any) => {
  
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
