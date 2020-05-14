import { useState, useRef, useEffect } from 'react';

export function useDelayValueUpdate<T>(
  value: T,
  delay: number,
  shouldDelay: (value: T) => boolean,
  areEqual?: (a: T, b: T) => boolean,
) {
  const [delayedValue, setDelayedValue] = useState(value);
  const delayTimeout = useRef(-1);

  if (areEqual ? !areEqual(value, delayedValue) : value !== delayedValue) {
    if (shouldDelay(value)) {
      delayTimeout.current = window.setTimeout(() => {
        setDelayedValue(value);
      }, delay);
    } else {
      setDelayedValue(value);
    }
  }

  useEffect(() => () => clearTimeout(delayTimeout.current), []);

  return delayedValue;
}
