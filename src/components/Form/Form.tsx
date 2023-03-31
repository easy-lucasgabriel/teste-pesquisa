import styled from "styled-components";
import { FlexboxProps, LayoutProps, SpaceProps, flexbox, layout, space, color, ColorProps, border, BorderProps } from "styled-system";

type FormProps = LayoutProps & SpaceProps & FlexboxProps & ColorProps & BorderProps;

export const Form = styled.form<FormProps>`
    display:flex;
    gap:0.5vw;
    list-style:none;
    ${layout}
    ${space}
    ${flexbox}
    ${color}
    ${border}
`;