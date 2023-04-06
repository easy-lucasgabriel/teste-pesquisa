import styled from "styled-components";
import { FlexboxProps, LayoutProps, SpaceProps, flexbox, layout, space, typography , color, ColorProps, border, BorderProps, boxShadow, TypographyProps ,BoxShadowProps, position, PositionProps } from "styled-system";

type DivProps = LayoutProps & SpaceProps & FlexboxProps & ColorProps & BorderProps & BoxShadowProps & PositionProps & TypographyProps;

export const Div = styled.div<DivProps>`
    display:flex;
    gap:0.5vw;
    list-style:none;
    ${layout}
    ${space}
    ${flexbox}
    ${color}
    ${border}
    ${boxShadow}
    ${position}
    ${typography}
`;