import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavItemContainer = styled.li`
`;
NavItemContainer.displayName='NavItemContainer';

export const NavItemLink = styled(NavLink)`
  text-decoration: none;
  color: ${({theme}) => theme.colors.headerLink};
  padding: 0 1rem;
`;
NavItemContainer.displayName='NavItemLink';