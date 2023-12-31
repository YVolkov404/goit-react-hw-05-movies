import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from 'components/GlobalStyle';
import { ThemeProvider } from 'styled-components';

const theme = {
  firstColor: '#f3ffe1',
  secondColor: '#2d3047',
  thirdColor: '#72bf80',
  fourthColor: '#fffd82',
  fifthColor: '#e53a35',
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
      <GlobalStyle />
    </BrowserRouter>
  </React.StrictMode>
);
