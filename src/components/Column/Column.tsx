import styled from "styled-components";
import { LayoutProps, SpaceProps, layout, space } from "styled-system";

type ColumnProps = LayoutProps & SpaceProps;

export const Column = styled.div<ColumnProps>`
    display:flex;
    align-items:center;
    gap:1vw;
    ${layout}
    ${space}
`;