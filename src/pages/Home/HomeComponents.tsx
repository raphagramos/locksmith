import styled from 'styled-components';
import { Link } from 'react-router-dom';
import WebFont from 'webfontloader';
import {mobile,mobilemin} from '../../../components/dimensions'
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
  background-color:#8a141c;;
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
  height: 300px;
   ${mobile} {
    display:none;
  }
`;

const Section = styled.div`
  ${CommonTextStyles}
  background-color: rgb(255, 255, 255, 0.6);
  border-radius: 2rem;
  padding: 1.25rem;
  display: flex;
  width: 95%;
  justify-content: center;
  align-items: center; 
  flex-direction: column;
  ${mobile} {
    display: block;
    width: 100%;
    border-radius: 0rem;
    text-align: center;
  }
`;

export const FirstSection = styled.div`
  ${CommonTextStyles}
  margin-bottom: 1rem;
  background-color: #8a141c;
  display: flex;
  width: 95%;
  flex-direction: column;
  border-radius:2rem;
  padding: 1.5rem;
  ${mobile} {
    width: 100%;
    display:block;
    text-align: center;
  }
`;

export const ThirdSection = styled.div`
   ${CommonTextStyles}
   background-color: rgb(255, 255, 255, 0.6);
  border-radius: 2rem;
  padding: 1.25rem;
  display: flex;
  width: 95%;
  justify-content: center;
  align-items: center; 
  flex-direction: column;
  ${mobile} {
    display: block;
    width: 100%;
    border-radius: 0rem;
    text-align: center;
  }
`;


export const GenericTexts = styled.div`
  ${CommonTextStyles}
 display: contents;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const GenericTextstwo = styled.div`
  ${CommonTextStyles}
  display: flex;
  flex-direction: column;
  text-align: center;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const ImageSection = styled.div`
  ${CommonTextStyles}
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    border-radius: 0.5rem;
    width: 45rem;
    height: auto;
  }
  ${mobile} {
    width: 100% ;
    align-items: center;
    
    img {
      border-radius: 0.5rem;
      width: 25rem;
      height: auto;
    }
    ${mobilemin} {
      width: 100% ;
      align-items: center;
      
      img {
        border-radius: 0.5rem;
        width: 22rem;
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

  color: rgb(16, 42, 116);
  font-size: 18px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  ${mobile} {
    width: 100% ;
    margin-bottom:2rem;
  }
`;

const Title = styled.h1`
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
  text-align: center;
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
    color:#8a141c;
    transition: color 0.5s ease;
  }
`;

export const Subtitletwo = styled.h2`
  ${CommonTextStyles}
  color: black;
  font-weight: bold;
  font-size: 24px;
  margin-top: 1rem;
`;
export const PhoneTitle = styled.h2`
  ${CommonTextStyles}

  color: rgb(16, 42, 116);
  font-weight: bold;
  font-size: 24px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin-top: 1rem;
  &:hover {
    color:#8a141c;
    transition: color 0.5s ease;
  }

  ${mobile} {
    display:flex;
    font-size: 20px;
    margin-right:1.5rem;
  }
`;

export const PhoneTitleTwo = styled.h2`
  ${CommonTextStyles}

  color: white;
  font-weight: bold;
  font-size: 24px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin-top: 1rem;
  &:hover {
    color:rgb(16, 42, 116);
    transition: color 0.5s ease;
  }

    ${mobile} {
      display:flex;
      font-size: 20px;
      margin-right:1.5rem;
    }
    ${mobilemin} {
      font-size: 20px;
      display:flex;
      margin-right:1.5rem;
      height:3rem;
      margin-bottom:3rem;
    }
`;

const PhoneLink = styled(Link)`
  ${CommonTextStyles}

  text-decoration: none;
  justify-items: center;
  color: inherit;
  border-radius: 1rem;
  gap:0.2rem;
  p {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: bold;
  }

  img {
    margin: 0rem 1rem;
    width: 3rem;
    height: auto;
  }
  ${mobile} {
    display:block;
    width: 100% ;
    margin-bottom:2rem;


    img {
      width: 2.8rem;
    }    
  }

`;

const ImageContainer = styled.div``;

const Image = styled.img`
  width: 100%;
  border:solid dimgray 2px;
  border-radius: 4rem;
  max-width: 25rem;
`;
const ImageTwo = styled.img`
  border:solid dimgray 2px;
  max-width: 55rem;
`;

export {
  HomeContainer,
  Section,
  Title,
  Subtitle,
  PhoneLink,
  ImageContainer,
  Image,
  ImageTwo,
  HomeImg,
};
