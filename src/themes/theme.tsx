/* eslint-disable no-empty-pattern */
import { ThemeProvider } from 'styled-components';
interface Props {
  children: React.ReactNode;
}

const fontSizes: any = [14, 20, 96];
fontSizes.body = fontSizes[0];
fontSizes.bodyExtraLarge = fontSizes[1];
fontSizes.displayExtraLarge = fontSizes[2];

const primary = '#2F4F4F';
const secondary = '#256784';

const theme = {
  fontSizes,
  colors: {
    primary,
  },
};

export type ThemeType = typeof theme;

export const Theme: React.FC<Props> = ({children}) => {
  return (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );
};
