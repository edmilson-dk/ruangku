import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    font-size: 62.5%;
  }

  h1,
  h2,
  h3,
  body,
  button {
    font-family: 'Poppins', sans-serif;
  }

  a {
    text-decoration: none;
    display: block;
  }

  img {
    display: block;
  }

  li {
    list-style: none;
  }
`;

export default GlobalStyle;
