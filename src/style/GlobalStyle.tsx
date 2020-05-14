import { Global, css } from '@emotion/react';
import React from 'react';
import scrollBar from './scrollBar';
import reset from './reset';
import { theme } from '@src/style/theme';

const GlobalStyle = () => (
  <Global
    styles={[
      css`
        #app,
        #modal,
        body,
        html {
          position: absolute;
          height: 100%;
          width: 100%;
          overflow: hidden;
          padding: 0;
          margin: 0;
          font-family: ${theme.fonts.primary};
          color: #000;
        }

        * {
          user-select: none;
        }

        button {
          color: #000;
        }

        p,
        h1,
        h2,
        h3 {
          user-select: text;

          * {
            user-select: text;
          }
        }
      `,
      reset,
      scrollBar,
    ]}
  />
);

export default GlobalStyle;
