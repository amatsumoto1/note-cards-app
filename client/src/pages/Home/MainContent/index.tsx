import React from 'react';
import { MainContainer } from './style';
import ImageCarosel from '../../../components/ImageCarosel';

const MainContent: React.VFC = () => {
  return (
    <MainContainer>
      <ImageCarosel />
    </MainContainer>
  );
}

export default MainContent;