import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  body {
      margin: 0;

      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
      font-family: 'Bungee Inline', sans-serif;
      font-family: 'Cairo Play', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

      background-color: #f3ffe1;
    }

    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    button, input {
      font: inherit;
    }

    button {
      padding: 0;
      outline-style: none;
      outline-color: transparent;
    }

    h1,
    h2,
    h3,
    ul,
    p {
      margin: 0;
      padding: 0;
    }

    ul {
      list-style: none;
    }

    a {
      text-decoration: none;
    }

    img {
      width: 100%;
      display: block;
      object-fit: cover;
    }

`;
