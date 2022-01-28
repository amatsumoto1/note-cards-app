import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

type NavItemContainerProps = {

}
export const NavItemContainer = styled.li<NavItemContainerProps>`
`;
NavItemContainer.displayName='NavItemContainer';

NavItemContainer.defaultProps = {
}


export const NavItemLink = styled(NavLink)`
  text-decoration: none;
  color: ${({theme}) => theme.colors.headerLink};
  padding: 0 1rem;
`;
NavItemContainer.displayName='NavItemLink';