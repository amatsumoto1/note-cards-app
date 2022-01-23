import styled from 'styled-components';
import BackgroundImage from '../../../assets/svgs/Background/HomePageCaroselBackground.svg';
import { FlexCenter } from '../../../components/Styles/Flexbox';

export const MainContainer = styled(FlexCenter).attrs({ as: 'main'})`
  justify-content: center;
  width: 100%;
  min-height: 20rem;
  background-image: url(${BackgroundImage});
  background-size: 1440px 500px;
  background-color: #f3d6f3;
`;
MainContainer.displayName = 'MainContainer';