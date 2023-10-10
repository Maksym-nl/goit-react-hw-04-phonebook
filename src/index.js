import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { App } from 'components/App';

const theme = {
  colors: {
    black: '#212121',
    wite: 'fff',
    red: 'orandered',
  },
  radii: {
    sm: '4px',
    md: '8px',
    lg: '16px',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
