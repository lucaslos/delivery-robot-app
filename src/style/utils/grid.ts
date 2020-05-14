import { css } from '@emotion/react';
import { parseUnit } from '@src/utils/parseUnit';

const autoFill = 'repeat(auto-fill, auto)';

type Unit = string | number;

export function gridStack(
  rows: Unit[] = [autoFill],
  align?: 'stretch' | 'center' | 'left' | 'right',
) {
  return css`
    display: grid;
    justify-items: ${align};
    grid-template-columns: 1fr;
    grid-template-rows: ${rows.map(row => parseUnit(row)).join(' ')};

    > * {
      min-height: 0;
    }
  `;
}

export function gridInline(
  columns: Unit[] = [autoFill],
  align?: 'stretch' | 'center' | 'top' | 'bottom',
) {
  return css`
    display: grid;
    align-items: ${align};
    grid-template-rows: 1fr;
    grid-template-columns: ${columns
      .map(column => parseUnit(column))
      .join(' ')};

    > * {
      min-width: 0;
    }
  `;
}

export function gridPos(row: string | number, column: string | number) {
  return css`
    grid-row: ${row};
    grid-column: ${column};
  `;
}
