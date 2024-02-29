import styled from 'styled-components';
import { CNavLink} from '@coreui/react';
import WebFont from 'webfontloader';
import {mobile} from '../../components/dimensions'

WebFont.load({
  google: {
    families: ['Exo Soft:600'],
  },
});

export const Img = styled.img`
  width: 15rem;  
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
color: rgb(16, 42, 116);
  &:hover {
    color:#f5ba26;
  }

  ${mobile} {
    width:105%;
    background-color: #white;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
    text-align: center;
    &.expanded {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
    }
  }
  }
`;