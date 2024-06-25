import styled from "styled-components";
import WebFont from "webfontloader";
WebFont.load({
  google: {
    families: ["Exo Soft:600", "Kanit"],
  },
});
import { mobile, mobilemin } from "../../../components/dimensions";
const CommonTextStyles = `
  font-family: 'Kanit', sans-serif;
  font-weight: 300;
`;

export const AboutUsContainer = styled.div`
  ${CommonTextStyles}
  background-color: #8a141c;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

export const Texts = styled.p`
  ${CommonTextStyles}
  margin-top: 2rem;
  color: white;
  font-size: 22px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

export const AboutUsSection = styled.div`
  ${CommonTextStyles}
  display: flex;
  margin-top: 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${mobile} {
    display: block;
    text-align: center;
  }
`;

export const AboutUsTitle = styled.h1`
  font-family: "Kanit", sans-serif;
  font-weight: 600;
  color:  white;
  font-size: 45px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

export const AboutUsSubtitle = styled.h2`
  ${CommonTextStyles}
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  font-size: 25px;
  margin-top: 1rem;
`;

export const AboutUsTexts = styled.div`
  width: 75%;
  color: white;
  font-weight: bold;
  margin-top:1rem;
  text-align: center;
  font-size: 16px;
  ${mobile} {
    width: 100%;
    margin-top: 1.5rem;
  }
  ${mobilemin} {
    width: 100%;
    margin-top: 1.5rem;
  }

`;

export const AboutUsImage = styled.img`
  ${CommonTextStyles}
  width: 100%;
  max-width: 510px;
  border-radius: 2rem;
  margin-right: 1.5rem;
  box-shadow: 10px 10px 10px #0d0d35;;

  ${mobile} {
    width: 80%;
    text-align: center;
  }
  ${mobilemin} {
    width: 80%;
    margin-top: 1.5rem;
    text-align: center;
    margin-left: 1rem;
  }
`;
