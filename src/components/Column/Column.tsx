import styled from "styled-components";
import { FlexboxProps, LayoutProps, SpaceProps, flexbox, layout, space, color, ColorProps, border, BorderProps, position, PositionProps } from "styled-system";

type ColumnProps = LayoutProps & SpaceProps & FlexboxProps & ColorProps & BorderProps & PositionProps;

export const Column = styled.div<ColumnProps>`
    display:flex;
    gap:1vw;
    box-shadow: 0 0 1vh 0.5vh rgba(0,0,0,0.2); 
    ${layout}
    ${space}
    ${flexbox}
    ${color}
    ${border}
    ${position}
`;