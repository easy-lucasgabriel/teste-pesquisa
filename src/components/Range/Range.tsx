import { useEffect, useState } from "react";
import styled from "styled-components";

interface Props {
  onMinChange: (min: number) => void;
  onMaxChange: (max: number) => void;
}

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    gap:0.5vw;
`;

export const InputNumber = styled.input`
  background-color: #f7f7f7;
  color: #242424;
  padding: 10px;
  min-height: 20px;
  font-size: 14px;
  border-radius: 4px;
  outline: none;
  border: none;
  line-height: 1.15;
  box-shadow: 0px 5px 20px -18px;

  &:focus {
    border-bottom: 2px solid #5b5fc7;
    border-radius: 4px 4px 2px 2px;
  }

  &:hover {
    outline: 1px solid lightgrey;
  }
`;

export function Range({ onMinChange, onMaxChange }: Props) {
  const [max, setMax] = useState(0);
  const [min, setMin] = useState(0);
  onMinChange(min);
  onMaxChange(max);

  return (
    <Wrapper>
          <InputNumber
            placeholder="Valor mínimo"
            type="number"
            onChange={(e: any) => setMin(e.target.value)}
          />

          <InputNumber
            placeholder="Valor máximo"
            type="number"
            onChange={(e: any) => setMax(e.target.value)}
          />
    </Wrapper>
  );
}
