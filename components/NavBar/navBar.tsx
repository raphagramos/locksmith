import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  CNavbar,
  CContainer,
  CNavbarToggler,
  CCollapse,
  CNavbarNav,
  CNavItem,
} from '@coreui/react';
import { Img, StyledNavLink,ImgTwo } from './navBarStyles';
import '@coreui/coreui/dist/css/coreui.min.css';

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
  const [visible, setVisible] = useState(false);

  return (
    <>
      <CNavbar expand="lg" colorScheme="light" className="bg-white">
        <StyledNavLink>
          <CContainer fluid>
            <NavLinkWithRouter to="/">
              <span className="navbar-brand">
                <Img src='public/logo.png'/>
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
                  Início
                </StyledNavLink>
              </NavLinkWithRouter>
            </CNavItem>
            <CNavItem className="nav-link">
              <NavLinkWithRouter to="/catalogo">
                <StyledNavLink>
                  Catálogo
                </StyledNavLink>
              </NavLinkWithRouter>
            </CNavItem>
            <CNavItem className="nav-link">
              <NavLinkWithRouter to="/aboutUs">
                <StyledNavLink>
                  Sobre nós
                </StyledNavLink>
              </NavLinkWithRouter>
            </CNavItem>
            <CNavItem className="nav-link">
              <NavLinkWithRouter to="/contactUs">
                <StyledNavLink>
                  Contato
                </StyledNavLink>
              </NavLinkWithRouter>
            </CNavItem>
            <CNavItem className="nav-link">
              <NavLinkWithRouter to="https://wa.me/message/SXGUDW4HN3U4J1">
                <StyledNavLink>
                <ImgTwo src="public/whatsapp1.png" alt="Ícone de telefone" />
                  Acesse Nosso WhatsApp
                </StyledNavLink>
              </NavLinkWithRouter>
            </CNavItem>
          </CNavbarNav>
        </CCollapse>
      </CNavbar>
    </>
  );
};

export default Navbar;