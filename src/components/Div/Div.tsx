import styled from "styled-components";
import { FlexboxProps, LayoutProps, SpaceProps, flexbox, layout, space, color, ColorProps, border, BorderProps } from "styled-system";

type DivProps = LayoutProps & SpaceProps & FlexboxProps & ColorProps & BorderProps;

export const Div = styled.div<DivProps>`
    display:flex;
    gap:1vw;
    ${layout}
    ${space}
    ${flexbox}
    ${color}
    ${border}
`;