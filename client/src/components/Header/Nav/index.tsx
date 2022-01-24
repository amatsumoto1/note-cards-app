import React from 'react';
import { NavContainer, NavItemList } from './style';
import Logo from '../Logo';
import NavItem from '../NavItem';

const Nav: React.VFC = () => {
  return (
    <NavContainer>
      <Logo />
      <NavItemList>
        <NavItem path='/'>
          Home
        </NavItem>
        <NavItem path='/about'>
          About
        </NavItem>
      </NavItemList>
    </NavContainer>
  )
}

export default Nav;