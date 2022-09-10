import { Global, css } from '@emotion/react';
import reset from 'emotion-reset';

export const GlobalStyle = () => (
  <Global
    styles={css`
      ${reset}

      * {
        box-sizing: border-box;
      }

      html {
        font-size: 16px;
        font-family: sans-serif;
        /* color: #000000; change if needed */ 
        width: 100%;
      }

      body {
        width: 100%;
      }

      div,
      section,
      header,
      footer {
        display: flex;
      }

      button {
        font-family: sans-serif;
        border: none;
        outline: none;
        background: none;
        box-shadow: none;
      }

      a {
        text-decoration: none;
      }

      input {
        font-family: sans-serif;
        font-size: 16px;
        border: none;
        outline: none;
      }
    `}
  />
);
