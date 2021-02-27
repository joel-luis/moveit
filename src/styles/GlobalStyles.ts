import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: var(--white)
  }
  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;
    width: 100%;
    height: 100%;
    
  }

  *, button, input {
    border: 0;
    background: none;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, Arial, sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  html {
    background: var(--primary);
  }
  :root {
    --primary: #2a2f32;
    --secondary: ##131c21;
    --white: #D9D9D9;
    --gray: #75787a;
    --green: #116062;
    --success: #00C06B;
    --failed: #E8265E;
    --dark-hover: #323739;
      }
`;
