import { css } from '@emotion/react';

const justifyValues = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
  spaceBetween: 'space-between',
  spaceAround: 'space-around',
  spaceEvenly: 'space-evenly',
} as const;

const alignValues = {
  top: 'flex-start',
  bottom: 'flex-end',
  center: 'center',
  stretch: 'stretch',
} as const;

export type InlineProps = {
  justify?: keyof typeof justifyValues;
  align?: keyof typeof alignValues;
  gap?: string | number;
};

export const inline = ({
  justify = 'left',
  align = 'center',
  gap,
}: InlineProps = {}) =>
  css({
    display: 'flex',
    justifyContent: justifyValues[justify],
    alignItems: alignValues[align],
    '> *:not(:last-child)': {
      marginRight: gap,
    },
    '> *': {
      flexShrink: 0,
    },
  });
