import { BrowserRouter , Route, Routes } from 'react-router-dom';
import { Home } from 'pages';

export const Rotas = () => {
  return(
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />}>
      </Route>
      </Routes>
    </BrowserRouter>
  )
}