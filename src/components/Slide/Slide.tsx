import { useState } from "react";
import { Div } from 'components';
import styled from "styled-components";

export const Tela = styled.span`
    width:80%;
    border: 1px solid #000;
`

export const Alternar = styled.button`
    font-size: 18px;
    color: #e1e1e1;
    font-family: inherit;
    font-weight: 800;
    cursor: pointer;
    position: relative;
    border: none;
    background: none;
    text-transform: uppercase;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 400ms;
    transition-property: color;

    &:focus,hover {
      color: #fff;
    }

    &:focus:after, &:hover:after{
      width: 100%;
      left: 0%;
    }

    &:after{
      content: "";
      pointer-events: none;
      bottom: -2px;
      left: 50%;
      position: absolute;
      width: 0%;
      height: 2px;
      background-color: #fff;
      transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
      transition-duration: 400ms;
      transition-property: width, left;
    }
`

export function Slide() {
  const [activeScreen, setActiveScreen] = useState(0);

  function handleSlide() {
    setActiveScreen(activeScreen === 0 ? 1 : 0);
  }

  return (
    <>
      <Tela
        style={{
          flex: 1,
          display: activeScreen === 0 ? "block" : "none",
          textAlign: "center"
        }}
      >
        <Alternar onClick={handleSlide}>Alternar para Tela 2</Alternar>
      </Tela>

      <Tela
        style={{
          flex: 1,
          display: activeScreen === 1 ? "block" : "none",
          textAlign: "center"
        }}
      >
        <Alternar onClick={handleSlide}>Alternar para Tela 1</Alternar>
      </Tela>
    </>
  );
};