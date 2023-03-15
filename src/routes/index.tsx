import { BrowserRouter , Route, Routes } from 'react-router-dom';
import { Home } from 'pages';

export const Routesz = () => {
  return(
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />}>
      </Route>
      </Routes>
    </BrowserRouter>
  )
}