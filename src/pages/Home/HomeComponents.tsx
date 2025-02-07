import styled from "styled-components";
// import { Link } from "react-router-dom";
import WebFont from "webfontloader";
import {
  mobilemin,
  mobile,
  desktopSmall,
  desktop,
} from "../../../components/dimensions";
WebFont.load({
  google: {
    families: ["Exo Soft:600", "Kanit"],
  },
});

export const HomeContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const StyledEmptyDiv = styled.div`
  height: 20rem;
`;

export const StyledImageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const Section = styled.div`
  background-image: url("/bghome.png");

  width: 100%;
  height: 75rem;
  display: grid;
  position: relative;
  ${mobile} {
    width: 100%;
    background-image: url("/bghome1.png");
    background-size: cover;
    height: 21.5rem;
  }
  ${mobilemin} {
    width: 100%;
    background-image: url("/bghome2.png");
    background-size: cover;
    height: 22rem;
  }
  ${desktopSmall} {
    background-image: url("/bghome.png");
  }
`;

export const FirstSection = styled.div`
  width: 100%;
  display: grid;
  position: relative;
  padding-bottom: 5rem;
  ${mobile} {
    padding-bottom: 1rem;
  }
`;

export const TitleTwo = styled.h1`
  font-family: "Oswald", sans-serif;
  font-weight: 600;
  margin-left: 2rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  background-color: #ffd83a;
  border-radius: 2rem;
  color: #2900f7;
  font-size: 120px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  ${mobile} {
    font-size: 20px;
    margin-left: 1rem;
  }
`;

export const MarcasDiv = styled.div`
  background-color: #ffd83a;
  width: 100%;
`;
export const TextoMarcasDiv = styled.div`
  background-color: #ffd83a;
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  ${mobile} {
    align-items: center;
    justify-content: center;
    display: flex;
  }
`;

export const TitleMarcas = styled.h1`
  font-family: "Oswald", sans-serif;
  font-weight: 600;
  width: 40%;
  padding: 4rem 2rem 2rem 4rem;
  font-size: 120px;
  color: #2900f7;
`;
export const TextoMarcas = styled.h2`
  font-family: "Oswald", sans-serif;
  font-weight: 600;
  width: 40%;
  padding: 0rem 4rem 2rem 4rem;
  font-size: 40px;
  color: #2900f7;
`;

export const TitleThree = styled.h1`
  font-family: "Oswald", sans-serif;
  font-weight: 600;
  align-self: center;
  background-color: #ffd83a;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  color: #2900f7;
  font-size: 90px;
  &:hover {
    color: white;
    transition: color 0.4s ease;
  }
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  ${mobile} {
    padding: 0.5rem 0.5rem;
    font-size: 12px;
  }
`;

export const TitleFour = styled.h1`
  font-family: "Oswald", sans-serif;
  font-weight: 600;
  padding: 3rem;
  color: #ffd83a;
  font-size: 55px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  ${mobile} {
    font-size: 16px;
    padding: 1.5rem;
  }
`;
export const AtendemosDiv = styled.div`
  background-color: #2900f7;
  border-top-right-radius: 2rem;
  max-height: 15rem;
  border-bottom-right-radius: 2rem;
  ${mobile} {
    max-height: 12rem;
  }
`;

export const TitleFour2 = styled.div`
  font-family: "Oswald", sans-serif;
  font-weight: 600;
  width: 7rem;
  height: 15rem;
  padding: 0;
  background-color: #2900f7;
  border-top-right-radius: 2rem;
  border-bottom-right-radius: 2rem;
  color: #ffd83a;
  font-size: 60px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  ${mobile} {
    font-size: 12px;
    max-height: 107.177px;
    padding: 0rem;
    margin-right: -1.5rem;
  }
`;

export const TitleFive = styled.div`
  font-weight: 600;
  display: flex;
  padding: 4rem;
  display: flex;
  background-color: #2900f7;
  border-top-left-radius: 2rem;
  border-bottom-left-radius: 2rem;
  width: 100%;
  align-items: center;
  max-height: 15rem;
  color: #ffd83a;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  ${mobile} {
    padding: 0.5rem;
    max-height: 10rem;
    
  }
`;

export const CallNow = styled.div`
  margin-top: 5rem;
  display: flex;

  align-items: center;
  width: 100%;
  ${mobile} {
    margin-top: 2rem;
    width: 100%;
  }
`;

export const Subtitletwo = styled.h2`
  font-family: "Oswald", sans-serif;
  font-weight: 600;
  margin-left: 2rem;
  padding: 1rem;
  width: 65%;
  border-radius: 2rem;
  color: #ffd83a;
  font-size: 55px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  ${mobile} {
    font-size: 12px;
    padding: 1rem;
    border-radius: 1rem;
  }
`;

export const CallNowSub = styled.div`
  display: flex;
  align-items: center;
  width: 77%;
  justify-content: flex-end;
`;

export const TelephoneIcon = styled.img`
  width: 18rem;
  margin-left: 2rem;
  ${mobile} {
    width: 4rem;
    margin-left: 1rem;
  }
`;
export const WhatsappIcon = styled.img`
  width: 8rem;
  margin-right: 1rem;
  ${mobile} {
    width: 3rem;
    margin-right: 0.1rem;
  }
`;
export const LocaleIcon = styled.img`
  margin-left: 4rem;
  ${mobile} {
    width: 5rem;
    margin-left: 1rem;
  }
`;
export const HoursIcon = styled.img`
  width: 18%;
  height: auto;
  align-self: center;
  margin-left: 2rem;
  margin-right: 2rem;
`;

export const VanDiv = styled.div`
  justify-self: flex-end;
  transition: transform 0.5s ease-out; 
`;
export const VanImage = styled.img`
  width: 100rem;
  max-width: 100%;

  ${mobile} {
    width: 20rem;
    max-width: 100%;
  }
`;

export const ServicesImage = styled.img`
  width: 100%;
  margin-top: 6rem;
  ${mobile} {
    display: none;
  }
`;
export const ServicesImageTwo = styled.img`
  width: 100%;
  ${mobile} {
    display: none;
  }
`;

export const ServicesImageMobile = styled.img`
  width: 100%;
  margin-top: 1rem;

  ${desktop} {
    display: none;
  }
  ${desktopSmall} {
    display: none;
  }
`;
export const ServicesImageTwoMobile = styled.img`
  width: 100%;
  ${desktop} {
    display: none;
  }
  ${desktopSmall} {
    display: none;
  }
`;
export const Homepage = styled.div`
  width: 100%;
`;

export const SecondSection = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const HomeSeparator = styled.div`
  height: 20rem;
  ${mobile} {
    height: 2rem;
  }
`;

export const ThirdSection = styled.div`
  width: 100%;
`;
export const LocaleDiv = styled.div`
  display: flex;
`;
export const PhoneNumber = styled.a.attrs({
  href: "tel:+351961195956",
})`
 font-family: "Oswald", sans-serif;
  font-size: 8rem;
  color: #ffd83a;
  text-decoration: none;
  ${mobile} {
    font-size: 20px;
    padding: 1rem;
  }
`;
export const Marcas = styled.img`
  width: 100%;
`;

export const ContactText = styled.a`
  font-family: "Oswald", sans-serif;
  font-size: 20px;

  color: #2900f7;
  text-decoration: none;
  ${mobile} {
    font-size: 10px;
  }
`;
export const ContactText2 = styled.a`
  font-family: "Oswald", sans-serif;
  font-size: 30px;

  color: #2900f7;
  text-decoration: none;
  ${mobile} {
    font-size: 12px;
  }
`;

export const ContactDiv = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile} {
    display: flex;
    width: 100%;
  }
  ${mobilemin} {
    display: flex;
    width: 100%;
  }
`;

export const SocialMedia = styled.div`
  padding: 2rem;
  ${mobile} {
    padding: 0.5rem;
  }
  ${mobilemin} {
    padding: 0.5rem;
  }
`;
export const SocialMediaImage = styled.img`
  width: 5rem;
  margin-right: 1rem;
  ${mobile} {
    width: 1rem;
    margin-right: 0.5rem;
  }
  ${mobilemin} {
    width: 1rem;
    margin-right: 0.5rem;
  }
`;
