import { useRef, useEffect } from 'react';

export function usePrevious<T>(value: T, initial: T | null = null) {
  const ref = useRef(initial);
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current as NonNullable<typeof ref['current']>;
}
