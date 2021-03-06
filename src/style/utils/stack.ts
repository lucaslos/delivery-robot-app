import { css } from '@emotion/react';

const justifyValues = {
  top: 'flex-start',
  center: 'center',
  bottom: 'flex-end',
  spaceBetween: 'space-between',
  spaceAround: 'space-around',
  spaceEvenly: 'space-evenly',
} as const;

const alignValues = {
  left: 'flex-start',
  right: 'flex-end',
  center: 'center',
  stretch: 'stretch',
} as const;

export type StackProps = {
  justify?: keyof typeof justifyValues;
  align?: keyof typeof alignValues;
  gap?: string | number;
  preventShrink?: boolean;
};

export const stack = ({
  justify = 'top',
  align = 'center',
  gap,
  preventShrink = true,
}: StackProps = {}) =>
  css({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: justifyValues[justify],
    alignItems: alignValues[align],
    '> *:not(:last-child)': {
      marginBottom: gap,
    },
    '> *': {
      flexShrink: preventShrink ? 0 : undefined,
    },
  });
