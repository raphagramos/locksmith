import styled from 'styled-components';
import { CNavLink, CNavbar} from '@coreui/react';
import WebFont from 'webfontloader';
import {mobile} from '../../components/dimensions'

WebFont.load({
  google: {
    families: ['Exo Soft:600'],
  },
});

export const Img = styled.img`
  width: 14rem;  
  height: auto;
`;
export const ImgTwo = styled.img`
margin-right: 1rem;
  width: 1.5rem;  
`;

export const StyledNavLink = styled(CNavLink)`
font-family: 'Exo Soft', sans-serif;
font-weight: 600;
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
color: #8a141c;
  &:hover {
    color: white;
  }

  ${mobile} {
    width:105%;
    background-color: #0d0d35;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
    text-align: center;
    &.expanded {
      position: fixed;
    }
  }
  
`;

export const StyledNavBar = styled(CNavbar)`
background-color: #0d0d35;
`;