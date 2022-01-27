import styled from 'styled-components';
import { ShadowedStyle } from '../Styles/Common';

export const FOOTER_HEIGHT = '2rem';

export const FooterContainer = styled.footer`
  ${ShadowedStyle}
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: ${FOOTER_HEIGHT};
  background-color: ${({theme}) => theme.colors.footerSecondary};
  color: ${({theme}) => theme.colors.footerMain};
`;
FooterContainer.displayName = 'FooterContainer';