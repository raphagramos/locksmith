import styled from "styled-components";
import { CContainer, CNavLink, CNavbar, CNavbarNav } from "@coreui/react";
import { mobile,desktop } from "../../components/dimensions";
import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: ["Oswald:wght@400;600;700"],
  },
});

export const Img = styled.img`
  width: 15rem;
  height: auto;
  ${mobile}{
      display: none;
    }
`;

export const ImgTwo = styled.img`
  margin-right: 1rem;
  width: 1.5rem;
  ${mobile} {
    margin-right: 0rem;
  }
`;

export const StyledCnavbar = styled(CNavbar)`
  background-color: #ffd83a;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1rem;
  ${mobile} {
    padding: 1rem 0rem;
  }
`;
export const MobileImg = styled.img`
    width: 7rem;
    ${desktop}{
      display: none;
    }
`
export const StyledCCointainer = styled(CContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem;

  ${mobile} {
    padding: 1.5rem;
  }
`;

export const StyledCNavbarNav = styled(CNavbarNav)`
  display: flex;
  align-items: center;
  gap: 2rem; 
 
  ${mobile} {
    justify-content: space-between;
    width: 100%;
    gap: 1rem; 
  }
`;
export const MenusDiv = styled.div`
display: flex;
`

export const StyledNavLink = styled(CNavLink)`
  font-family: "Oswald", sans-serif;
  font-size: 1.6rem;
  font-weight: 600;
  margin-left:2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  color: #2900f7;
  text-decoration: none;

  &:hover {
    color: white;
  }

  ${mobile} {
    margin-left: 0.2rem;
    font-size: 0.8rem;
    
    text-align: center;
  }
`;

export const LanguageIcons = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
export const LanguageIconsImg = styled.img`
width: 2rem;
cursor: pointer;
${mobile} {
  width: 1.5rem;
  }
`