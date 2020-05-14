import { css } from '@emotion/react';
/**
 *
 * @param emSize size in em unit
 */
export function letterSpacing(percentage: number) {
  return css`
    letter-spacing: ${percentage / 100}em;
    margin-right: -${percentage / 100}em;
  `;
}
