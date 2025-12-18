import styled from "styled-components";
// import { Link } from "react-router-dom";
import WebFont from "webfontloader";
import {
  mobilemin,
  mobile,
  desktopSmall,
  desktop,
  desktopLarge,
} from "../../components/dimensions";
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
  width: 100%;
  display: grid;
  position: relative;

  /* 🔵 PADRÃO DESKTOP */
  background-image: url("/bghome.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 60rem;


  ${mobile} {
    min-height: 10rem;
    background-position: 40% center;
  }
  /* 🖥️ DESKTOP SMALL */
  ${desktopSmall} {
    background-image: url("/bghome.webp");
  }

  /* 🖥️ DESKTOP LARGE (AJUSTE FINO) */
  ${desktopLarge} {
    background-size: cover;
    background-position: top right;
    background-repeat: no-repeat;
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
export const MarcasDiv2 = styled.div`
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  ${mobile} {
    justify-content: center;
  }
`;
export const ServiceText = styled.h2`
  font-family: "Oswald", sans-serif;
  font-weight: 600;
  color: #2900f7;
  padding-left: 1rem;
  width: 90%;
  ${mobile} {
    font-size: 14px;
    width: 100%;
    padding: 0rem 0rem 0rem 1rem;
  }
`;
export const MarcasText = styled.h2`
  padding: 1rem;
  font-family: "Oswald", sans-serif;
  font-weight: 600;
  color: #2900f7;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  ${mobile} {
    font-size: 14px;
    width: 100%;
    padding: 0rem 1rem 0rem 1rem;
  }
`;
export const WhoText = styled.h2`
  padding: 1rem;
  font-family: "Oswald", sans-serif;
  font-weight: 600;
  color: #2900f7;
  width: 90%;
  ${mobile} {
    font-size: 14px;
    width: 100%;
    padding: 0rem 0rem 0rem 1rem;
  }
`;

export const MarcasTitle = styled.h1`
  font-family: "Oswald", sans-serif;
  font-weight: 600;
  width: 100%;
  padding: 0rem 1rem 0rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffd83a;
  border-radius: 2rem;
  color: #2900f7;
  font-size: 90px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  ${mobile} {
    font-size: 30px;
    width: 100%;
  }
`;

export const WhoTitle = styled.h1`
  font-family: "Oswald", sans-serif;
  font-weight: 600;
  padding: 0rem 1rem 0rem 1rem;
  display: flex;
  align-items: center;
  border-radius: 2rem;
  color: #2900f7;
  font-size: 90px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  ${mobile} {
    padding: 0rem 0rem 0rem 0rem;
    font-size: 30px;
    width: 100%;
  }
`;
export const TitleTwo = styled.h1`
  font-family: "Oswald", sans-serif;
  font-weight: 600;
  margin-left: 2rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  background-color: #13ff42;
  border-radius: 2rem;
  color: #ffffff;
  font-size: 90px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  &:hover {
    color: #ffd83a;
    transition: color 0.4s ease;
  }
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
  margin: 0;
  align-self: center;
  background-color: #13ff42;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  color: #ffffff;
  font-size: 70px;
  &:hover {
    color: #ffd83a;
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
  font-size: 25px;
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
  justify-content: flex-end;
  width: 95%;
  ${mobile} {
    width: 90%;
  }
`;

export const TelephoneIcon = styled.img`
  width: 10rem;
  margin-left: 2rem;
  ${mobile} {
    width: 4rem;
    margin-left: 1rem;
  }
`;
export const WhatsappIcon = styled.img`
  width: 5rem;
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
export const HoursIconTwo = styled.img`
  width: 8%;
  align-self: center;
  margin-left: 1rem;
  ${mobile} {
    width: 18%;
  }
`;

export const VanDiv = styled.div`
  justify-self: flex-end;
  transition: transform 0.5s ease-out;
`;
export const VanImage = styled.img`
  width: 45rem;
  max-width: 100%;

  ${mobile} {
    width: 15rem;
    max-width: 100%;
  }
`;

export const ServicesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 4rem;
  ${mobile} {
    justify-content: flex-end;
  }
`;
export const WhoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  ${mobile} {
    justify-content: flex-end;
  }
`;

export const ServicesText = styled.div`
  padding: 2rem;
  border-radius: 10px;
  z-index: 1;
  width: 50%;
  margin-left: 5%;
  ${mobile} {
    width: 100%;
    padding: 0rem;
  }
`;
export const WhoTexts = styled.div`
  padding: 2rem;
  border-radius: 10px;
  z-index: 1;
  width: 50%;
  margin-right: 5%;
  ${mobile} {
    width: 100%;
    padding: 1rem 0rem 0rem 0rem;
  }
`;

export const ServicesImage = styled.img`
  width: 100%; /* Faz a imagem nunca ultrapassar a largura da tela */
  max-width: 500px; /* Define um limite máximo, ajusta conforme necessário */
  height: auto; /* Mantém a proporção */
  margin-top: 6rem;
  object-fit: cover;

  ${mobile} {
    width: 100%; /* Mantém o ajuste também no mobile */
    max-width: 200px; /* Um limite menor se precisar */
    margin-top: 2rem;
    object-fit: contain;
    content: url("/servicosmob.webp");
  }
`;
export const ServicesImageTwo = styled.img`
  width: 100%; /* Faz a imagem nunca ultrapassar a largura da tela */
  max-width: 500px; /* Define um limite máximo, ajusta conforme necessário */
  height: auto; /* Mantém a proporção */
  margin-top: 6rem;
  object-fit: cover;

  ${mobile} {
    width: 100%; /* Mantém o ajuste também no mobile */
    max-width: 200px; /* Um limite menor se precisar */
    margin-top: 2rem;
    object-fit: contain;
    content: url("/quemsomosmob.webp");
  }
`;

export const ServiceItem = styled.div`
  margin-top: 0.5rem;
`;

export const ServiceTitle = styled.h2`
  font-family: "Oswald", sans-serif;
  font-weight: 600;
  padding: 1rem;
  color: #ffd83a;
  width: 90%;
  ${mobile} {
    font-size: 16px;
    width: 100%;
    padding: 0rem 0rem 0rem 1rem;
  }
`;
export const ServiceDescription = styled.p`
  font-size: 1rem;
`;

export const TitleTwo2 = styled.div`
  display: flex;
  align-items: center;

  ${mobile} {
    margin-left: auto;
    justify-content: flex-end;
  }
`;

export const Icon = styled.img`
  margin-right: 10px;
  width: 5rem;
  vertical-align: middle;
  ${mobile} {
    width: 2rem;
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
  height: 0;
  ${mobile} {
    height: 100%;
  }
`;

export const HomeSeparator = styled.div`
  height: 5rem;
  ${mobile} {
    height: 1rem;
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
  margin-top: 1rem;
`;

export const ContactText = styled.a`
  font-family: "Oswald", sans-serif;
  font-size: 20px;

  color: #2900f7;
  text-decoration: none;
  ${mobile} {
    font-size: 14px;
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
export const MarcasDivTexts = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
