import { css, SerializedStyles } from '@emotion/react';
import * as CSS from 'csstype';

export const transitionDurations = {
  short: 160,
  medium: 240,
  long: 360,
} as const;

export type TransitionDurations = keyof typeof transitionDurations;

const easings = {
  inOut: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
  out: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
  in: 'cubic-bezier(0.4, 0.0, 1, 1)',
  linear: 'linear',
} as const;

export type TransitionEasings = keyof typeof easings;

type Props = {
  duration?: TransitionDurations | number;
  ease?: TransitionEasings;
  properties?: (keyof CSS.PropertiesHyphen)[];
  delay?: number;
};

type ArrayProp = {
  property?: keyof CSS.PropertiesHyphen;
  duration?: TransitionDurations;
  ease?: TransitionEasings;
  delay?: number;
};

const appendMs = (value?: string | number) => (value ? `${value}ms` : '');

export function transitionShorthand({
  property,
  duration = 'medium',
  ease = 'inOut',
  delay,
}: ArrayProp = {}) {
  return `${property || ''} ${appendMs(transitionDurations[duration])} ${
    easings[ease]
  } ${appendMs(delay)}`;
}

export function transition(props?: Props): SerializedStyles;
export function transition(props: ArrayProp[]): SerializedStyles;
export function transition(props: Props | ArrayProp[] = {}) {
  if (Array.isArray(props)) {
    return css({
      transition: props
        .map(itemProps => transitionShorthand(itemProps))
        .join(', '),
    });
  }

  const { properties, duration, ease, delay } = props;

  return css({
    transition: `${appendMs(
      typeof duration === 'number'
        ? duration
        : transitionDurations[duration || 'medium'],
    )} ${easings[ease || 'inOut']} ${appendMs(delay)}`,
    transitionProperty: properties?.join(', '),
  });
}
