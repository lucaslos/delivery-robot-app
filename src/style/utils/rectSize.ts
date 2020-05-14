import { css } from '@emotion/react';

export function rectSize(size: number) {
  return css`
    width: ${size}px;
    height: ${size}px;
  `;
}
