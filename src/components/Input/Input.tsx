import styled from 'styled-components';

export const Input = styled.input `
  background-color:transparent;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #fff;
  color:#fff;
  height:10%;
  outLine: none;
  
  &::placeholder {
    color: rgba(0, 0, 0, 1);
  }
`;