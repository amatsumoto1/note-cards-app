import React, { Suspense } from 'react';
import { lazyImport } from './utils/lazy';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App: React.VFC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App;