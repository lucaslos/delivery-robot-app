import { css } from '@emotion/react';

export function circle(size: number) {
  return css`
    width: ${size}px;
    height: ${size}px;
    border-radius: ${size}px;
  `;
}
