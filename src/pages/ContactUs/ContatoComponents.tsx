import styled from "styled-components";
import WebFont from "webfontloader";
import { mobile, mobilemin } from "../../../components/dimensions";
WebFont.load({
  google: {
    families: ["Exo Soft:600", "Kanit"],
  },
});

const CommonTextStyles = `
  font-family: 'Kanit', sans-serif;
  font-weight: 300;
`;

    export const ContatoContainer = styled.div`
      ${CommonTextStyles}
      background-color: #102a74;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      box-shadow: 10px 0 20px rgba(16, 42, 116, 0.8);
      ${mobile} {
        width: 100% !important;
        justify-content: center;
      }
      ${mobilemin} {
        width: 100% !important;
        justify-content: center;
      }
    `;

export const ContactTitle = styled.h1`
  font-family: "Kanit", sans-serif;
  font-weight: 600;
  color: white;
  font-size: 45px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin-bottom: 1rem;
  ${mobile} {
    text-align: center;
    font-size: 40px;
  }
  ${mobilemin} {
    text-align: center;
    font-size: 35px;
  }
`;

export const ContactText = styled.p`
  font-family: "Kanit", sans-serif;
  font-weight: 300;
  color: white;
  margin: 0.5rem 0;
  font-size: 18px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  &:hover {
    color: #f5ba26;
    transition: color 0.5s ease;
  }
  ${mobile} {
    text-align: center;
    font-size: 12px;
    margin: 0
  }
  ${mobilemin} {
    text-align: center;
    margin: 0;
    font-size: 10px;
  }
`;

export const ContactLink = styled.a`
  font-family: "Kanit", sans-serif;
  font-weight: 300;
  color: white;
  text-decoration: none;

  img {
    width: 3rem;
    margin-right: 0.5rem;
  }

  &:hover {
    color: #fff;
    transition: #f5ba26;
  }
`;
