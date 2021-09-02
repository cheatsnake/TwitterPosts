import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import App from './App';

const Global = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: gray;
  }
  ::-webkit-scrollbar-thumb {
    background: #1d9bf0;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
}
`
const theme = {
  colors: {
    darkBg: '#15202b',
    lightBg: '#fff',
    accent: '#1d9bf0'
  },
  fontColors: {
    dark: '#fff',
    light: '#000'
  }
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Global/>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
