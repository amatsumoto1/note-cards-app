import styled from 'styled-components';
import { ShadowedStyle } from '../Styles/Common';

export const HEADER_HEIGHT = '2.5rem';

export const HeaderContainer = styled.header`
  ${ShadowedStyle}
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
  height: ${HEADER_HEIGHT};
  color: ${({theme}) => theme.colors.headerMain};
  background-color: ${({theme}) => theme.colors.headerSecondary};
`;
HeaderContainer.displayName = 'HeaderContainer';