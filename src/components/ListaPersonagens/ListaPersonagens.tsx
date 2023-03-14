import { useState } from "react";
import { Div } from "components";
import { Resultados } from "interfaces";

interface ResultadosProps {
  resultados: Resultados[];
}

function ListaPersonagens({ resultados }: ResultadosProps) {
  const [order, setOrder] = useState(1);
  const [columnOrder, setColumnOrder] = useState("");

  const handleOrder = (fieldName: any) => {
    setOrder(-order);
    setColumnOrder(fieldName);

    resultados.sort((a: any, b: any) => {
      return a[columnOrder] < b[columnOrder] ? -order : order;
    });
  };

  return (
    <ul>
      <li onClick={(e) => handleOrder("birth_year")}>Aperta aqui niver</li>
      <li onClick={(e) => handleOrder("name")}>Aperta aqui mudança incrivel</li>
      <li onClick={(e) => handleOrder("height")}>Aperta aqui altura</li>
      {resultados.map((personagem, index) => {
        return (
          <Div key={index} justifyContent="space-evenly">
              
            <div>
              {personagem.name}
            </div>
              
            <div>
              {personagem.height}
            </div>
              
            <div>
              {personagem.birth_year}
            </div>
          </Div>
        );
      })}
    </ul>
  );
}

export default ListaPersonagens;
