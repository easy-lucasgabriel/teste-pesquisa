import styled from 'styled-components';

export const Input = styled.input `
  background-color:transparent;
  padding: 10px;
  border: 1px solid #000;
  color:#fff;
  height:10%;
  
  &::placeholder {
    color: rgba(0, 0, 0, 1);
  }
`;