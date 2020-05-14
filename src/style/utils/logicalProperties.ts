import { css } from '@emotion/react';

type Unit = string | number;

export const marginInline = (value: Unit) => css({
  marginLeft: value,
  marginRight: value,
});

export const paddingInline = (value: Unit) => css({
  paddingLeft: value,
  paddingRight: value,
});
