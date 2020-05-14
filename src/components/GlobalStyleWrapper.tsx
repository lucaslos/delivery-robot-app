import React, { FunctionComponent } from 'react';
import { ThemeProvider } from '@emotion/react';
import GlobalStyle from '@src/style/GlobalStyle';
import DebugLayout from '@src/style/utils/DebugLayout';
import { Helmet } from 'react-helmet';

import appConfig from '../../app.config.json';

const googleFonts = appConfig.html.fonts
  ? appConfig.html.fonts
      .map(
        font =>
          `${font.family.replace(' ', '+')}${
            font.weights ? `:${font.weights.join(',')}` : ''
          }`,
      )
      .join('|')
  : false;

const GlobalStyleWrapper: FunctionComponent = ({ children }) => {
  return (
    <>
      <Helmet>
        {googleFonts && (
          <link
            href={`https://fonts.googleapis.com/css?family=${googleFonts}&display=swap`}
            rel="stylesheet"
          />
        )}
      </Helmet>
      <GlobalStyle />
      {__DEV__ && <DebugLayout />}
      {children}
    </>
  );
};

export default GlobalStyleWrapper;
