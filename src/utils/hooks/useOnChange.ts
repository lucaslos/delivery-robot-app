import { useEffect } from 'react';
import { usePrevious } from './usePrevious';

export function useOnChange<T>(value: T, callBack: (last: T) => void) {
  const last = usePrevious(value, value);
  useEffect(() => {
    if (value !== last) {
      callBack(last);
    }
  }, [value]);
}

export function useOnChangeTo<T>(
  value: T,
  target: T,
  callBack: (last: T) => void,
) {
  const last = usePrevious(value, value);
  useEffect(() => {
    if (value !== last && value === target) {
      callBack(last);
    }
  }, [value]);
}
