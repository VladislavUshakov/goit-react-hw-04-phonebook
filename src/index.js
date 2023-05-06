import React from 'react';
import ReactDOM from 'react-dom/client';
import { theme } from './settings/theme';
import { App } from 'components/App';
import { ThemeProvider } from '@emotion/react';
import { GlobalStyle } from 'GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App title="Phonebook" />
    </ThemeProvider>
  </React.StrictMode>
);
