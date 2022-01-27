import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useAppSelector } from '../../hooks/redux';
import { getCurrentTheme } from '../../selectors/Theme';
import { PageContent } from './style';
import Header from '../Header';
import Footer from '../Footer';

const PageWrapper: React.FC = ({ children }) => {

  const theme = useAppSelector(getCurrentTheme);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <PageContent>
        { children }
      </PageContent>
      <Footer />
    </ThemeProvider>
  );
}

export default PageWrapper;