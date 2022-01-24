import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './style';
import { Provider } from 'react-redux';
import { store } from './store';
import { StyleSheetManager } from 'styled-components';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <StyleSheetManager disableVendorPrefixes>
      <Provider store={store}>
        <GlobalStyle />
        <App />
      </Provider>
    </StyleSheetManager>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();