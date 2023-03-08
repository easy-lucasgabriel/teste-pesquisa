import { Theme, GlobalStyles } from 'themes';
import { Routes } from 'routes';

export const App = () => {
  return (
    <div>
      <Theme>
        <GlobalStyles />
        <Routes />
      </Theme>
    </div>
  );
}

export default App;
