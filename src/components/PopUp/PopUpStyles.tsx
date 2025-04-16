import styled from "styled-components";
import { mobile,desktop } from "../dimensions";

export const StyledButtonDesktop = styled.a`
    ${mobile} {
      display: none;
    }
`;
export const StyledButtonMobile = styled.a`
    ${desktop} {
      display: none;
    }
`;
