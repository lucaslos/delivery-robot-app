import { css } from '@emotion/react';

export function anchorColor(color: string) {
  return css`
    color: ${color};

    &:visited {
      color: ${color};
    }
  `;
}
