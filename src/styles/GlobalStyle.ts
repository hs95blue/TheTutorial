import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  #root {
    width: 100%; /* Mobile and tablet default to 100% */
    padding: 2rem;
    text-align: center;
    margin: 0 auto; /* Center align */
  }

  @media (min-width: 768px) {
    #root {
      max-width: 800px; /* Tablet max width */
    }
  }

  @media (min-width: 1200px) {
    #root {
      width: 50%; /* Desktop width */
      max-width: none; /* Remove max width restriction */
    }
  }

  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    background-color: #f4f4f4;
    color: #333;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
  }

  input, button {
    outline: none;
  }
`;

export default GlobalStyle;
