import { createGlobalStyle } from "styled-components";
import { ThemeType } from './theme';


export const GlobalStyles = createGlobalStyle <{theme : ThemeType}>`
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');

  *{
    margin:0;
    padding:0;
    font-family: 'Ubuntu', sans-serif;
    border:0,
    box-sizing: border-box;
  }
  body{
    background-color: ${ ({theme}) => theme.colors.primary}
  }
`;