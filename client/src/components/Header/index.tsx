import React from 'react';
import { HeaderContainer } from './style';
import Nav from './Nav';

const Header: React.VFC = () => {
  return (
    <HeaderContainer>
      <Nav />
    </HeaderContainer>
  )
}

export default Header;