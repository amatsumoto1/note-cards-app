import React from 'react';
import { ThemeProvider } from 'styled-components';
import { baseTheme } from '../../themes/base';
import { PageContent } from './style';
import Header from '../Header';
import Footer from '../Footer';

const PageWrapper: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={baseTheme}>
      <Header />
      <PageContent>
        { children }
      </PageContent>
      <Footer />
    </ThemeProvider>
  )
}

export default PageWrapper;