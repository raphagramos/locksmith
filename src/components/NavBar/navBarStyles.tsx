import styled from "styled-components";
import { CContainer, CNavLink, CNavbar, CNavbarNav } from "@coreui/react";
import { mobile, desktop } from "../dimensions";
import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: ["Oswald:wght@400;600;700"],
  },
});

export const Img = styled.img`
  width: 12rem;
  height: auto;

  ${mobile} {
    display: none;
  }
`;

export const MobileImg = styled.img`
  width: 5rem; /* 🔽 menor no mobile */

  ${desktop} {
    display: none;
  }
`;

export const ImgTwo = styled.img`
  margin-right: 1rem;
  width: 1.5rem;

  ${mobile} {
    margin-right: 0;
  }
`;

export const StyledCnavbar = styled(CNavbar)`
  background-color: #ffd83a;
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* DESKTOP */
  padding: 0.75rem 1rem;

  /* MOBILE */
  ${mobile} {
    padding: 0.4rem 0.75rem; /* 🔽 altura real */
    min-height: 56px;        /* padrão mobile */
  }
`;

export const StyledCCointainer = styled(CContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* DESKTOP */
  padding: 0.75rem 1rem;

  /* MOBILE */
  ${mobile} {
    padding: 0; /* 🔥 remove gordura */
  }
`;

export const StyledCNavbarNav = styled(CNavbarNav)`
  display: flex;
  align-items: center;
  gap: 2rem;

  ${mobile} {
    width: 100%;
    justify-content: space-between;
    gap: 0.5rem;
  }
`;

export const MenusDiv = styled.div`
  display: flex;
  align-items: center;

  ${mobile} {
    gap: 0.25rem;
  }
`;

export const StyledNavLink = styled(CNavLink)`
  font-family: "Oswald", sans-serif;
  font-size: 1.6rem;
  font-weight: 600;
  margin-left: 2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  color: #2900f7;
  text-decoration: none;

  &:hover {
    color: white;
  }

  ${mobile} {
    margin-left: 0;
    font-size: 0.85rem;
    padding: 0.25rem 0.4rem; /* 🔽 reduz altura */
    text-align: center;
  }
`;

export const LanguageIcons = styled.div`
  position: absolute;
  top: 0.4rem;
  right: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const LanguageIconsImg = styled.img`
  width: 2rem;
  cursor: pointer;

  ${mobile} {
    width: 1.4rem;
  }
`;
