import styled from 'styled-components';
import { Link } from 'react-router-dom';
import WebFont from 'webfontloader';
import {desktop, mobile,mobilemin} from '../../../components/dimensions'
WebFont.load({
  google: {
    families: ['Exo Soft:600', 'Kanit'],
  },
});


const CommonTextStyles = `
font-family: 'Kanit', sans-serif;
font-weight: 300;
`;

const HomeContainer = styled.div`
  ${CommonTextStyles}
  background-color:white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  ${mobile} {
    width: 100% ;
  }
`;

const HomeImg = styled.img`
  margin: 0.5rem;
  width: 100%;
  height: 300px;
  max-width: 100%;
  opacity: 0.8;
   box-shadow: 10px 0 20px rgba(16, 42, 116, 0.6);
   ${mobile} {
    display:none;
  }
`;

const Section = styled.div`
  ${CommonTextStyles}
  margin: 0.5rem;
  background-color:white;
  display: flex;
  padding: 1.25rem;
  width: 100%;
  ${mobile} {
    display:block;
    text-align: center;
  }
`;
export const FirstSection = styled.div`
  ${CommonTextStyles}
  margin-bottom: 1rem;
  background-color: rgba(245, 171, 38,0.8);
  display: flex;
  
  padding: 1.25rem;
  width: 100%;
  box-shadow: 10px 0 20px rgba(16, 42, 116, 0.8);
  ${mobile} {
    display:block;
    text-align: center;
  }
`;

export const ThirdSection = styled.div`
  ${CommonTextStyles}
  margin: 0.5rem;
  background-color:white;
  display: flex;
  padding: 1.25rem;
  width: 100%;
  ${mobile} {
    display:block;
    text-align: center;
  }
`;


export const GenericTexts = styled.div`
  ${CommonTextStyles}
  width: 50%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: bold;
  font-size: 16px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const GenericTextstwo = styled.div`
  ${CommonTextStyles}
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const ImageSection = styled.div`
  ${CommonTextStyles}
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  img {
    border-radius: 0.5rem;
    width: 35rem;
    height: auto;
  }
  ${mobile} {
    width: 100% ;
    align-items: center;
    
    img {
      border-radius: 0.5rem;
      width: 23.5rem;
      height: auto;
    }
    ${mobilemin} {
      width: 100% ;
      align-items: center;
      
      img {
        border-radius: 0.5rem;
        width: 19rem;
        height: auto;
        margin-right:0.5rem;
      }  
  }}
`;

export const Texts = styled.p`
  ${CommonTextStyles}
  margin-top: 2rem;
  color: rgb(16, 42, 116);
  font-size: 18px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;
export const TextsTwo = styled.p`
  ${CommonTextStyles}
  margin-top: 2rem;
  color: white;
  font-size: 18px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;
export const TextsThree = styled.p`
  ${CommonTextStyles}
  margin-top: 2rem;
  margin-bottom:15rem;
  color: rgb(16, 42, 116);
  font-size: 18px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  ${mobile} {
    width: 100% ;
    margin-bottom:2rem;
  }
`;

const Hometitle = styled.h1`
font-family: 'Kanit', sans-serif;
font-weight: 600;
  color: rgb(16, 42, 116);
  font-size: 45px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  `;

export const TitleTwo = styled.h1`
font-family: 'Kanit', sans-serif;
font-weight: 600;
  color: white;
  font-size: 45px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  `;

const Subtitle = styled.h2`
  ${CommonTextStyles}
  color: rgb(16, 42, 116);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  font-size: 25px;
  margin-top: 1rem;
`;
export const SubtitleCall = styled.h2`
  ${CommonTextStyles}
  color: rgb(16, 42, 116);
  font-weight: bold;
  font-size: 24px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin-top: 1rem;
  &:hover {
    color:#f5ba26;
    transition: color 0.5s ease;
  }
`;

export const Subtitletwo = styled.h2`
  ${CommonTextStyles}
  color: black;
  font-weight: bold;
  font-size: 30px;
  margin-top: 1rem;
`;
export const WhatsappIcon = styled.img`
  width: 4rem;
  margin-right: 1rem;
  
  ${mobile} {
    width: 5rem;  
    margin-right: 0.5rem; 
  }

  ${mobilemin} {
    width: 5rem; 
    margin-right: 0.5rem;
  }
`;
export const PhoneTitle = styled.h2`
  ${CommonTextStyles}
  color: white;
  font-weight: bold;
  font-size: 40px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin: 0;
  line-height: 1;
  white-space: nowrap;

  &:hover {
    color: rgb(16, 42, 116);
    transition: color 0.5s ease;
  }

  ${mobile} {
    font-size: 25px; 
    white-space: nowrap;
    text-align: center;
  }
  ${mobilemin} {
    font-size: 23px; 
    white-space: nowrap;
    text-align: center;
  }
`;


export const PhoneTitleTwo = styled.h2`
  ${CommonTextStyles}

  color: white;
  font-weight: bold;
  font-size: 35px;
  white-space: nowrap;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

  &:hover {
    color: rgb(16, 42, 116);
    transition: color 0.5s ease;
  }

  ${mobile} {
    display: flex;
    
    font-size: 30px;
    white-space: normal;
    margin-right: 1.5rem;
    align-items: center;  
  }

  ${mobilemin} {
    font-size: 30px;  
    display: flex;
    margin-top: 0rem;
    white-space: normal;
    align-items: center; 
  }
`;


const PhoneLink = styled(Link)`
  ${CommonTextStyles}
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-decoration: none;
  color: white;
 
  background-color: #25D366;
  border-radius: 999px;
  padding: 1.5rem 2.5rem; /* altura fixa */
  font-size: 1.2rem;
  font-weight: bold;
  gap: 0.8rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;

  img {
    width: 2rem;
    height: auto;
  }

  &:hover {
    background-color: #1ebe5d;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.96);
  }

  ${mobile} {
    padding: 1.5rem 2.5rem;
    margin-bottom: 1.5rem;
    font-size: 1.4rem;
    img {
      width: 2.5rem;
    }
  }
`;


const ImageContainer = styled.div``;

const Image = styled.img`
  ${CommonTextStyles}
  width: 100%;
  max-width: 300px;
  border-radius: 2rem;

`;

export {
  HomeContainer,
  Section,
  Hometitle,
  Subtitle,
  PhoneLink,
  ImageContainer,
  Image,
  HomeImg,
};
export const LanguageIconsMobile = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: auto;
  ${desktop} {
      display:none;
      font-size: 20px;
      margin-right:1.5rem;
    }
`;
