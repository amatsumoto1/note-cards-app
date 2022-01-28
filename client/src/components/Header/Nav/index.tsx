import React from 'react';
import { NavContainer, NavItemList, NavItemRightList } from './style';
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
      <NavItemRightList>
        <NavItem path='/login'>
          Login
        </NavItem>
      </NavItemRightList>
    </NavContainer>
  )
}

export default Nav;