import { css, SerializedStyles } from '@emotion/react';
import { useState, useRef, useMemo, useLayoutEffect } from 'react';
import {
  transition,
  transitionDurations,
  TransitionDurations,
  TransitionEasings,
} from '@src/style/utils/transition';

const fromStyle = css`
  opacity: 0;
`;

const enterStyle = css`
  opacity: 1;
`;

export type AnimStates = 'from' | 'enter' | 'leave' | 'unmounted';

type Styles = {
  from?: SerializedStyles;
  enter?: SerializedStyles;
  leave?: SerializedStyles;
  duration?: TransitionDurations | number;
  ease?: TransitionEasings;
};

export function useAnimateMountUnmout(
  show: boolean,
  {
    duration = 'short',
    ease = 'linear',
    from = fromStyle,
    enter = enterStyle,
    leave = fromStyle,
  }: Styles = {},
) {
  const [animState, setAnimState] = useState<AnimStates>(show ? 'from' : 'unmounted');
  const timeoutRef = useRef<any>();

  useLayoutEffect(() => {
    if (animState === 'unmounted' && !show) return;

    if (show === true) {
      setAnimState('from');

      clearTimeout(timeoutRef.current);
      timeoutRef.current = globalThis.setTimeout(
        () => setAnimState('enter'),
        5,
      );
    } else {
      setAnimState('leave');
      clearTimeout(timeoutRef.current);
      timeoutRef.current = globalThis.setTimeout(
        () => setAnimState('unmounted'),
        typeof duration === 'string' ? transitionDurations[duration] : duration,
      );
    }
  }, [show]);

  const mountStyle = useMemo(
    () =>
      css([
        animState === 'from' ? from : animState === 'enter' ? enter : leave,
        transition({ duration, ease }),
      ]),
    [animState, duration, ease],
  );

  return { showElem: animState !== 'unmounted', animState, mountStyle };
}
