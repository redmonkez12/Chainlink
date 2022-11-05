import styled from "styled-components";
import { Link } from "react-router-dom";

export enum ButtonTypes {
    PRIMARY = "PRIMARY",
    SECONDARY = "SECONDARY",
}

export const ButtonLinkStyled = styled(Link)<{ type: ButtonTypes }>`
  width: 100%;
  padding: 16px 32px;
  border: 2px solid var(--grey);
  text-align: center;
  border-radius: 4px;
  line-height: 20px;
  text-decoration: none;
  box-shadow: 0 12px 32px -12px rgba(12, 22, 44, .32);

  ${(props) => (props.type === ButtonTypes.PRIMARY && `
    border-color: var(--primary-color);
    background-color: var(--primary-color);
    color: #fff;
  `)}

  ${(props) => (props.type === ButtonTypes.SECONDARY && `
    border-color: var(--primary-color);
    background-color: var(--white);
    color: var(--primary-color);
  `)}
`;