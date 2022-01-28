import styled from 'styled-components';
import { NoBulletList } from '../../Styles/List';
import { MIN_XL_SCREEN_SIZE } from '../../../constants/Screen';

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  max-width: 100%;
  margin: auto;
  justify-content: space-between;
  height: 100%;

  @media screen and (min-width: ${MIN_XL_SCREEN_SIZE}px) {
    max-width: 80rem;
  }
`;
NavContainer.displayName = 'NavContainer';


export const NavItemList = styled(NoBulletList)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 2rem;
`;
NavItemList.displayName = 'NavItemList';


export const NavItemRightList = styled(NoBulletList)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
NavItemRightList.displayName = 'NavItemRightList';