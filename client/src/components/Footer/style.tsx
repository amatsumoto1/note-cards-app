import styled from 'styled-components';
import { ShadowedStyle } from '../Styles/Common';

export const FOOTER_HEIGHT = '2rem';

export const FooterContainer = styled.footer`
  ${ShadowedStyle}
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: ${FOOTER_HEIGHT};
  background-color: ${props => props.theme.backgroundColors.footer};
  color: ${props => props.theme.colors.footer};
`;
FooterContainer.displayName = 'FooterContainer';