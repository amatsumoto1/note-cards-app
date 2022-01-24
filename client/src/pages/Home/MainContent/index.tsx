import React from 'react';
import { MainContainer, MainHeader, MainSubheader } from './style';
import ImageCarosel from '../../../components/ImageCarosel';

const MainContent: React.VFC = () => {
  return (
    <MainContainer>
      <MainHeader>
        Flashcards Application
      </MainHeader>
      <MainSubheader>
        Quiz yourself and manage your own notes.
      </MainSubheader>
      <ImageCarosel flex={1} />
    </MainContainer>
  );
}

export default MainContent;