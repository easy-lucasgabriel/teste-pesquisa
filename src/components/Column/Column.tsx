import styled from "styled-components";
import { FlexboxProps, LayoutProps, SpaceProps, flexbox, layout, space } from "styled-system";

type ColumnProps = LayoutProps & SpaceProps & FlexboxProps;

export const Column = styled.div<ColumnProps>`
    display:flex;
    gap:1vw;
    ${layout}
    ${space}
    ${flexbox}
`;