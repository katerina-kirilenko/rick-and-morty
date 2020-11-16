import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle<any>`
* {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
      'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    color: rgb(255, 152, 0);
    transition: all 0.2s ease 0s;
  }

  .wrapper {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .page {
    background-color: rgb(36, 40, 47);
    padding-bottom: 1rem;
    min-height: 100vh;
  }

  .container {
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: rgb(245, 245, 245);
  }
`;
