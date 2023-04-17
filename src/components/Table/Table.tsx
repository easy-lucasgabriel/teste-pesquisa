import styled from "styled-components";
import {
  FlexboxProps,
  LayoutProps,
  SpaceProps,
  flexbox,
  layout,
  space,
  color,
  ColorProps,
  border,
  BorderProps,
  position,
  PositionProps,
  typography,
  TypographyProps,
} from "styled-system";

type TableProps = LayoutProps &
  SpaceProps &
  FlexboxProps &
  ColorProps &
  BorderProps &
  TypographyProps &
  PositionProps;

export const Table = styled.table<TableProps>`
  ${layout}
  ${space}
    ${flexbox}
    ${color}
    ${border}
    ${position}
    ${typography}
    background-color:rgba(255,255,255);
  min-width: 75vw;
  max-width: 78vw;
  min-height: 90%;
  color: grey;
  border: 0.2vh solid rgba(0, 0, 0, 0.2);
  border-radius: 1vh;
  box-shadow: 0 0 2vh 0vh rgba(0, 0, 0, 0.3);
  text-align: center;
`;

export const Th = styled.th<TableProps>`
display:flex;
width:100%;
padding:0.1vh;
  ${layout}
  ${space}
${flexbox}
${color}
${border}
${position}
${typography}
`;
export const Tr = styled.tr<TableProps>`
display:flex;
gap:10px;
${layout}
${space}
${flexbox}
${color}
${border}
${position}
${typography}
`;
export const Td = styled.td<TableProps>`
display:flex;
width:100%;
padding:0.1vh;
flex-wrap:wrap;
  ${layout}
  ${space}
${flexbox}
${color}
${border}
${position}
${typography}
`;
