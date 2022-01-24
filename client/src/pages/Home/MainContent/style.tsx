import styled from 'styled-components';
import BackgroundImage from '../../../assets/svgs/Background/HomePageCaroselBackground.svg';
import { FlexCenter } from '../../../components/Styles/Flexbox';
import { CenteredFullHeader } from '../../../components/Styles/Header';

export const MainContainer = styled(FlexCenter).attrs({ as: 'main'})`
  justify-content: center;
  width: 100%;
  min-height: 20rem;
  background-image: url(${BackgroundImage});
  background-size: 1440px 500px;
  background-color: #f3d6f3;
`;
MainContainer.displayName = 'MainContainer';

export const MainHeader = styled(CenteredFullHeader)`
  font-size: 2rem;
  margin: 0.5rem 0;
  font-weight: 700;
`;
MainHeader.displayName = 'MainHeader';

export const MainSubheader = styled(CenteredFullHeader).attrs({ as: 'h2' })`
  font-size: 1.5rem;
  margin: 0.5rem 0;
  font-weight: 600;
`;
MainSubheader.displayName = 'MainSubheader';