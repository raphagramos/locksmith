import Popup from "reactjs-popup";
import styled from "styled-components";
import { mobile } from "./dimensions";

export const StyledPopup = styled(Popup)`
  &-content {
    background: rgb(16, 42, 116);
    padding: 10px;
    color: #fff;
    border-radius: 20px;
    max-width: 300px;
    max-height: 100px;
    display: flex;
    align-items: center;
    justify-content: center; 

    ${mobile} {
      padding: 45px;
      max-width: 500px;
      max-height: 200px;
    }
  }
`;
