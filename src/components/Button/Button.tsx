import styled from "styled-components";
import { FlexboxProps, LayoutProps, SpaceProps, flexbox, layout, space, color, ColorProps, border, BorderProps } from "styled-system";

type ButtonProps = LayoutProps & SpaceProps & FlexboxProps & ColorProps & BorderProps;

export const Button = styled.button<ButtonProps>`
    padding: 17px 40px;
    border-radius: 0;
    border: 0;
    background-color: #f7f7f7;
    box-shadow: rgb(0 0 0 / 5%) 0 0 8px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-size: 15px;
    transition: all .5s ease;
    box-shadow: 0px 5px 20px -18px;
   
   &:hover {
    letter-spacing: 3px;
    background-color: hsl(261deg 80% 48%);
    color: hsl(0, 0%, 100%);
    box-shadow: rgb(93 24 220) 0px 7px 29px -10px;
   }
   
   &:active {
    letter-spacing: 3px;
    background-color: hsl(261deg 80% 48%);
    color: hsl(0, 0%, 100%);
    box-shadow: rgb(93 24 220) 0px 0px 0px 0px;
    transform: translateY(2px);
    transition: 200ms;
   }
`;