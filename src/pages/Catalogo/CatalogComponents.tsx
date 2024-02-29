import styled from 'styled-components';
import { Link } from 'react-router-dom';
import WebFont from 'webfontloader';
WebFont.load({
  google: {
    families: ['Exo Soft:600', 'Kanit'],
  },
});
import {mobile} from '../../../components/dimensions'


const CommonTextStyles = `
font-family: 'Kanit', sans-serif;
font-weight: 300;
`;

const CatalogContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const CatalogImg = styled.img`
  ${CommonTextStyles}
  width: 100%;
  height: auto;  
  max-width: 100%;
  opacity: 0.8;
`;
export const PhoneTitle = styled.h2`
  ${CommonTextStyles}

  color: white;
  font-weight: bold;
  font-size: 24px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  &:hover {
    color:rgb(16, 42, 116);
    transition: color 0.5s ease;
  }
`;
export const PhoneLink = styled(Link)`
  ${CommonTextStyles}
  display: inline-block;
  text-decoration: none;
  color: inherit;
  margin-top: 2rem;
  border-radius: 1rem;
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
`;
export const CatalogFirstSection = styled.div`
  ${CommonTextStyles}
  margin: 1.5rem;
  background-color: rgba(245,171,38, 0.8);
  display: flex;
  padding: 1.25rem;
  width: 100%;
  box-shadow: 10px 0 20px rgba(16, 42, 116, 0.8);

  ${mobile} {
    display:block;
    text-align: center;
    }
`;
const CatalogSection = styled.div`
  ${CommonTextStyles}
  margin: 0.5rem;
  background-color: white;
  display: flex;
  padding: 1.25rem;
  width: 100%;
  ${mobile} {
    display:block;
    text-align: center;
    }
`;

export const FirstCatalogSection = styled.div`
  ${CommonTextStyles}
  margin-bottom: 0.5rem;
  background-color: rgba(245,171,38, 0.8);
  display: flex;
  padding: 1.25rem;
  width: 100%;
  box-shadow: 10px 0 20px rgba(16, 42, 116, 0.8);
  ${mobile} {
    display:block;
    text-align: center;
    }
`;

export const ThirdCatalogSection = styled.div`
  ${CommonTextStyles}
  background-color: white;
  display: flex;
  padding: 1.25rem;
  width: 100%;
  ${mobile} {
    display:block;
    text-align: center;
    }
`;

export const CatalogTexts = styled.div`
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

export const CatalogTextsTwo = styled.div`
${CommonTextStyles}
width: 50%;
color: white;
display: flex;
flex-direction: column;
justify-content: center;
margin-bottom:10rem;
font-weight: bold;
font-size: 16px;
@media screen and (max-width: 768px) {
  width: 100%;
  margin-bottom:2rem;
}
`;

export const CatalogImageSection = styled.div`
  ${CommonTextStyles}
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  img {
    border-radius: 0.5rem;
    width: 100%;  
    max-width: 40rem; 
    height: auto;
  }
`;

export const CatalogImageMobileSection = styled.div`
  ${CommonTextStyles}
  width: 50%;
  display: none;
  align-items: center;

  img {
    width: 100%;
    height: auto;
  }
`;

export const CatalogText = styled.p`
  ${CommonTextStyles}
  margin-top: 2rem;
  color: rgb(16, 42, 116);
  font-size: 18px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

export const CatalogTextTwo = styled.p`
  ${CommonTextStyles}
  margin-top: 2rem;
  color: white;
  font-size: 18px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

export const CatalogTextThree = styled.p`
  ${CommonTextStyles}
  margin-top: 2rem;
  margin-bottom: 15rem;
  color: rgb(16, 42, 116);
  font-size: 18px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const CatalogTitle = styled.h1`
  font-family: 'Kanit', sans-serif;
  font-weight: 600;
  color: rgb(16, 42, 116);
  font-size: 45px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
`;
export const CatalogFirstTitle = styled.h1`
  font-family: 'Kanit', sans-serif;
  font-weight: 600;
  color: white;
  font-size: 45px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

export const CatalogTitleTwo = styled.h1`
  font-family: 'Kanit', sans-serif;
  font-weight: 600;
  color: white;
  font-size: 45px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
`;

const CatalogSubtitle = styled.h2`
  ${CommonTextStyles}
  color: rgb(16, 42, 116);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  font-size: 25px;
  margin-top: 1rem;
`;

export const CatalogSubtitleTwo = styled.h2`
  ${CommonTextStyles}
  color: white;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  font-size: 24px;
  margin-top: 1rem;
`;

export const CatalogPhoneTitle = styled.h2`
  ${CommonTextStyles}
  color: white;
  font-weight: bold;
  font-size: 24px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  margin-top: 1rem;
  &:hover {
    color: rgb(16, 42, 116);
    transition: color 0.5s ease;
  }
`;

export const CatalogPhoneTitleTwo = styled.h2`
  ${CommonTextStyles}
  color: white;
  font-weight: bold;
  font-size: 24px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin-top: 1rem;
  &:hover {
    color: rgb(16, 42, 116);
    transition: color 0.5s ease;
  }
`;

const CatalogPhoneLink = styled(Link)`
  ${CommonTextStyles}
  display: inline-block;
  text-decoration: none;
  color: inherit;
  margin-top: 4rem;
  border-radius: 1rem;
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
`;

const CatalogImageContainer = styled.div` 
`;

const CatalogImage = styled.img`
  ${CommonTextStyles}
  width: 100%;
  max-width: 300px;
  border-radius: 2rem;
  margin-right: 1.5rem;
  ${mobile} {
  width: 45rem;
  max-width: 380px;
    }

 
`;

export {
  CatalogContainer,
  CatalogSection,
  CatalogTitle,
  CatalogSubtitle,
  CatalogPhoneLink,
  CatalogImageContainer,
  CatalogImage,
  CatalogImg,
};