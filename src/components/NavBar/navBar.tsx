import { useTranslation } from "react-i18next";
import { CNavItem } from "@coreui/react";
import {
  Img,
  StyledNavLink,
  StyledCnavbar,
  StyledCCointainer,
  StyledCNavbarNav,
  MobileImg,
  MenusDiv,
  LanguageIcons,
  LanguageIconsImg,
} from "./navBarStyles";
import "@coreui/coreui/dist/css/coreui.min.css";
import useIsMobile from "../IsMobile";
import React from "react";
const NavLinkWithScroll: React.FC<{ scrollToId: string; children: React.ReactNode }> = ({ scrollToId, children }) => {
  const handleNavLinkClick = (event: React.MouseEvent) => {
    event.preventDefault();
    const element = document.getElementById(scrollToId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
 
  return (
    <a href={`#${scrollToId}`} style={{ textDecoration: "none" }} onClick={handleNavLinkClick}>
      {children}
    </a>
  );
};

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isMobile = useIsMobile();
  const toggleLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <StyledCnavbar expand="md" colorScheme="light" style={{ position: "relative" }}>
      <StyledCCointainer fluid>
        <LanguageIcons>
          <LanguageIconsImg
            src="/pt.svg"
            onClick={() => toggleLanguage("ptPT")}
            alt="Portuguese"
          />
          <LanguageIconsImg
            src="/uk.svg"
            onClick={() => toggleLanguage("en")}
            alt="English"
          />
        </LanguageIcons>
        <NavLinkWithScroll scrollToId="homepage">
          <span className="navbar-brand">
            <Img src="/LOGO.webp" alt={t("navbar.logoAlt")} />
          </span>
        </NavLinkWithScroll>

        {/* Mantendo os itens sempre visíveis */}

        <StyledCNavbarNav className="navbar-nav" style={{ display: "flex", flexDirection: "row" }}>
          {isMobile &&
          <div>
            <MobileImg src="/LOGO.webp" alt={t("navbar.logoAlt")} />
          </div>
          }
          <MenusDiv>
            <CNavItem className="nav-link">
              <NavLinkWithScroll scrollToId="homepage">
                <StyledNavLink>{t("navbar.home")}</StyledNavLink>
              </NavLinkWithScroll>
            </CNavItem>
            <CNavItem className="nav-link">
            <NavLinkWithScroll scrollToId={"servicos"} >
                <StyledNavLink>{t("navbar.catalog")}</StyledNavLink>
              </NavLinkWithScroll>
            </CNavItem>
            <CNavItem className="nav-link">
              <NavLinkWithScroll scrollToId="contato">
                <StyledNavLink>{t("navbar.contactUs")}</StyledNavLink>
              </NavLinkWithScroll>
            </CNavItem>
            <CNavItem className="nav-link">
            <NavLinkWithScroll scrollToId={"quemsomos"} >
                <StyledNavLink>{t("navbar.aboutUs")}</StyledNavLink>
              </NavLinkWithScroll>
            </CNavItem>
          </MenusDiv>
        </StyledCNavbarNav>
      </StyledCCointainer>
    </StyledCnavbar>
  );
};

export default Navbar;
