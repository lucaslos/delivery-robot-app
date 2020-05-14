import { css } from '@emotion/react';
import { parseUnit } from '@src/utils/parseUnit';

type Unit = string | number;

// TODO: add two margin options

function getDimension(margin: Unit | [Unit, Unit]) {
  return Array.isArray(margin)
    ? `calc(100% - (${parseUnit(margin[0])} + ${parseUnit(margin[1])}))`
    : `calc(100% - (${parseUnit(margin, '')}px * 2))`;
}

export const responsiveWidth = (
  maxWidth: Unit,
  margin: Unit | [Unit, Unit] = 0,
) => css`
  max-width: ${parseUnit(maxWidth)};
  width: ${getDimension(margin)};
`;

export const responsiveHeight = (
  height: Unit,
  margin: Unit | [Unit, Unit] = 0,
) => css`
  max-height: ${parseUnit(height)};
  height: ${getDimension(margin)};
`;
