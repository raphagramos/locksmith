import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  CNavbar,
  CContainer,
  CNavbarToggler,
  CCollapse,
  CNavbarNav,
  CNavItem
} from '@coreui/react';
import { Img, StyledNavLink, ImgTwo, LanguageIcons } from './navBarStyles';
import '@coreui/coreui/dist/css/coreui.min.css';

const NavLinkWithRouter: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => {
  const navigate = useNavigate();

  const handleNavLinkClick = () => {
    navigate(to);
  };

  return (
    <Link to={to} style={{ textDecoration: 'none' }} onClick={handleNavLinkClick}>
      {children}
    </Link>
  );
};

const Navbar: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <CNavbar style={{zIndex:"100000"}} expand="lg" colorScheme="light" className="bg-white">
      <CContainer fluid>
        <NavLinkWithRouter to="/">
          <span className="navbar-brand">
            <Img src='logo.png' alt={t('navbar.logoAlt')} />
          </span>
        </NavLinkWithRouter>
        <CNavbarToggler
          aria-label="Toggle navigation"
          aria-expanded={visible}
          onClick={() => setVisible(!visible)}
        />
        <CCollapse className="navbar-collapse" visible={visible}>
          <CNavbarNav className="navbar-nav">
            <CNavItem className="nav-link">
              <NavLinkWithRouter to="/">
                <StyledNavLink>{t('navbar.home')}</StyledNavLink>
              </NavLinkWithRouter>
            </CNavItem>
            <CNavItem className="nav-link">
              <NavLinkWithRouter to="/catalogo">
                <StyledNavLink>{t('navbar.catalog')}</StyledNavLink>
              </NavLinkWithRouter>
            </CNavItem>
            <CNavItem className="nav-link">
              <NavLinkWithRouter to="/aboutUs">
                <StyledNavLink>{t('navbar.aboutUs')}</StyledNavLink>
              </NavLinkWithRouter>
            </CNavItem>
            <CNavItem className="nav-link">
              <NavLinkWithRouter to="/contactUs">
                <StyledNavLink>{t('navbar.contactUs')}</StyledNavLink>
              </NavLinkWithRouter>
            </CNavItem>
            <CNavItem className="nav-link">
              <NavLinkWithRouter to="https://wa.me/message/SXGUDW4HN3U4J1">
                <StyledNavLink>
                  <ImgTwo src="whatsapp1.png" alt={t('navbar.whatsappAlt')} />
                  {t('navbar.whatsappLink')}
                </StyledNavLink>
              </NavLinkWithRouter>
            </CNavItem>
          </CNavbarNav>
          <LanguageIcons>
            <img 
              style={{ width: "2rem", cursor: "pointer", margin: "0 0.5rem" }} 
              src='https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg' 
              onClick={() => toggleLanguage('ptPT')} 
              alt="Portuguese" 
            />
            <img 
              style={{ width: "2rem", cursor: "pointer", margin: "0 0.5rem" }} 
              src='https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg' 
              onClick={() => toggleLanguage('en')} 
              alt="English" 
            />
          </LanguageIcons>
        </CCollapse>
      </CContainer>
    </CNavbar>
  );
};

export default Navbar;
