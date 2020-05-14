import { css, Global } from '@emotion/react';
import { useShortCut } from '@src/utils/hooks/useShortCut';
import React, { useState } from 'react';

const debugLayoutStyle = css`
  *:not(g):not(path) {
    color: hsla(210, 100%, 100%, 0.9) !important;
    outline: solid 3px hsla(210, 100%, 100%, 0.5) !important;
    box-shadow: none !important;
    filter: none !important;
    * {
      background-color: rgba(255, 0, 0, 0.2) !important;
    }
    * * {
      background-color: rgba(0, 255, 0, 0.2) !important;
    }
    * * * {
      background-color: rgba(0, 0, 255, 0.2) !important;
    }
    * * * * {
      background-color: rgba(255, 0, 255, 0.2) !important;
    }
    * * * * * {
      background-color: rgba(0, 255, 255, 0.2) !important;
    }
    * * * * * * {
      background-color: rgba(255, 255, 0, 0.2) !important;
    }
    * * * * * * * {
      background-color: rgba(255, 0, 0, 0.2) !important;
    }
    * * * * * * * * {
      background-color: rgba(0, 255, 0, 0.2) !important;
    }
    * * * * * * * * * {
      background-color: rgba(0, 0, 255, 0.2) !important;
    }
  }
`;

const DebugLayout = () => {
  const [show, setShow] = useState(false);

  useShortCut('shift+d', () => setShow(!show), [show]);

  return <Global styles={show && debugLayoutStyle} />;
};

export default DebugLayout;
