import { useState } from "react";
import { Div, Button } from 'components';

export function Slide() {
  const [activeScreen, setActiveScreen] = useState(0);

  function handleSlide() {
    setActiveScreen(activeScreen === 0 ? 1 : 0);
  }

  return (
    <Div>
      <Div
        style={{
          flex: 1,
          display: activeScreen === 0 ? "block" : "none",
          textAlign: "center"
        }}
      >
        <p>{}</p>
        <Button onClick={handleSlide}>Alternar para Tela 2</Button>
      </Div>

      <Div
        style={{
          flex: 1,
          display: activeScreen === 1 ? "block" : "none",
          textAlign: "center"
        }}
      >
        <p>{}</p>
        <Button onClick={handleSlide}>Alternar para Tela 1</Button>
      </Div>
    </Div>
  );
};