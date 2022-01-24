import React from 'react';
import { LogoContainer } from './style';
import { NavLink } from 'react-router-dom';
import { ReactComponent as LogoIcon } from '../../../assets/svgs/Logo.svg';

const Logo: React.VFC = () => {
  return (
    <LogoContainer>
      <NavLink to='/' aria-label='Home'>
        <LogoIcon height='2.5rem' width='4rem' />
      </NavLink>
    </LogoContainer>
  )
}

export default Logo;