import { Tr, Th, Td, Div, Button } from "components";
import { PageTypes, Result } from "interfaces";
import { apidev } from "providers";
import { useState } from "react";

interface ResultadosProps {
  resultados: PageTypes | any;
  min: any;
  max: any;
}

interface PokemonDetails {
  name: string;
  height: number;
  weight: number;
  types: { type: { name: string } }[];
}

export function ListaPokes({ resultados }: ResultadosProps) {

  const [selectedPokemon, setSelectedPokemon] = useState<PokemonDetails | null>(null);

   function handlePokemonClick(url:string) {
    apidev
      .get(url)
      .then((response) => {
        setSelectedPokemon(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <Div flexDirection="column">
      <Tr backgroundColor="none" justifyContent="flex-end" textAlign="center">
        <Button>alfabético </Button>
        <Button>data </Button>
      </Tr>
      <Tr
        backgroundColor="rgba(0,0,0,0.05)"
        justifyContent="space-evenly"
        textAlign="center"
      >
        <Th>Nome do Poke</Th>
        <Th>Altura</Th>
        <Th>Peso</Th>
        <Th>Tipos</Th>
      </Tr>
      {resultados?.results.map((data: Result, index: any) => {
        return (
          <Tr key={index} justifyContent="space-evenly" textAlign="center">
            <Button onClick={() => handlePokemonClick(data.url)}>
              {data.name}
             </Button> 
          </Tr>
        );
      })}

      {selectedPokemon && (
        <div>
          <h2>{selectedPokemon.name}</h2>
          <p>Height: {selectedPokemon.height}</p>
          <p>Weight: {selectedPokemon.weight}</p>
          <p>
            Types:
            {selectedPokemon.types.map((type) => (
              <span key={type.type.name}> {type.type.name} </span>
            ))}
          </p>
        </div>
      )}

    </Div>
  );
}
