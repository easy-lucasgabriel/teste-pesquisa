import { BrowserRouter , Route, Routes } from 'react-router-dom';
import { Home, Jogos, Financas } from 'pages';
import { Menu } from 'components'
export const Rotas = () => {
  return <main>
    <BrowserRouter>
          <Menu />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/results-jogos" element={<Jogos />} />
          <Route path="/results-financas" element={<Financas />} />
      </Routes>
    </BrowserRouter>
  </main>
}