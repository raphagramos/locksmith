import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  CContainer,
  CNavbarToggler,
  CCollapse,
  CNavbarNav,
  CNavItem,
} from '@coreui/react';
import { Img, StyledNavLink, ImgTwo, StyledNavBar, LanguageIcons, LanguageIconsMobile } from './navBarStyles';
import '@coreui/coreui/dist/css/coreui.min.css';
import { useTranslation } from 'react-i18next';

interface NavLinkWithRouterProps {
  to: string;
  children: React.ReactNode;
}

const NavLinkWithRouter: React.FC<NavLinkWithRouterProps> = ({ to, children }) => {
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
  const { t,i18n } = useTranslation();
  const [visible, setVisible] = useState(false);
  const toggleLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };
  return (
    <>
      <StyledNavBar expand="lg" colorScheme="light">
      <LanguageIconsMobile>
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
          </LanguageIconsMobile>
        <StyledNavLink>
          <CContainer fluid>
            <NavLinkWithRouter to="/">
              <span className="navbar-brand">
                <Img src='logo.png' />
              </span>
            </NavLinkWithRouter>
            <CNavbarToggler
              aria-label="Toggle navigation"
              aria-expanded={visible}
              onClick={() => setVisible(!visible)}
            />
          </CContainer>
        </StyledNavLink>
        <CCollapse className="navbar-collapse" visible={visible}>
          <CNavbarNav className="navbar-nav">
            <CNavItem className="nav-link">
              <NavLinkWithRouter to="/">
                <StyledNavLink>
                  {t('navbar.home')}
                </StyledNavLink>
              </NavLinkWithRouter>
            </CNavItem>
            <CNavItem className="nav-link">
              <NavLinkWithRouter to="/catalogo">
                <StyledNavLink>
                  {t('navbar.catalog')}
                </StyledNavLink>
              </NavLinkWithRouter>
            </CNavItem>
            <CNavItem className="nav-link">
              <NavLinkWithRouter to="/aboutUs">
                <StyledNavLink>
                  {t('navbar.aboutUs')}
                </StyledNavLink>
              </NavLinkWithRouter>
            </CNavItem>
            <CNavItem className="nav-link">
              <NavLinkWithRouter to="/contactUs">
                <StyledNavLink>
                  {t('navbar.contact')}
                </StyledNavLink>
              </NavLinkWithRouter>
            </CNavItem>
            <CNavItem className="nav-link">
              <NavLinkWithRouter to="https://wa.me/+351966799623">
                <StyledNavLink>
                  <ImgTwo src="whatsapp1.png" alt="Ícone de telefone" />
                  {t('navbar.whatsapp')}
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
      </StyledNavBar>
    </>
  );
};

export default Navbar;
