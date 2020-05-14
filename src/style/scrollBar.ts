import { css } from '@emotion/react';
import { shade } from '@src/utils/shade';
import { theme } from './theme';

export default css`
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${shade(theme.colors.bg, 0.05)};
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    margin: 2px;
    background-color: ${shade(theme.colors.bg, 0.24)};

    &:hover {
      background-color: ${shade(theme.colors.bg, 0.32)};
    }

    &:active {
      background-color: ${shade(theme.colors.bg, 0.4)};
    }
  }

  ::-webkit-scrollbar-corner {
    background-color: ${shade(theme.colors.bg, 0.05)};
  }
`;
