import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageWrapper from './components/PageWrapper';

const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const NotFound = lazy(() => import('./pages/NotFound'));

const App: React.VFC = () => {
  return (
    <BrowserRouter>
      <PageWrapper>
        <Suspense fallback={null}>
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/login' element={ <Login /> } />
            <Route path='*' element={ <NotFound /> } />
          </Routes>
        </Suspense>
      </PageWrapper>
    </BrowserRouter>
  )
}

export default App;