import { Theme, GlobalStyles } from 'themes';
import { Routesz } from 'routes';

export const App = () => {
  return (
    <div>
      <Theme>
        <GlobalStyles />
        <Routesz />
      </Theme>
    </div>
  );
}

export default App;
