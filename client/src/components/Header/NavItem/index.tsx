import React from 'react';
import { NavItemContainer, NavItemLink } from './style';

type Props = React.PropsWithChildren<{
  path: string
}>;

const NavItem : React.FC<Props> = ({ path, children }: Props) => {
  return (
    <NavItemContainer>
      <NavItemLink to={path}>
        { children }
      </NavItemLink>
    </NavItemContainer>
  );
}

export default NavItem;