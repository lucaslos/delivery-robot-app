import { useState, useEffect, RefObject } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

const useAutoresize = (elementRef: RefObject<any>) => {
  const [{ width, height }, setMeasurements] = useState({ width: 0, height: 0 });
  const observer = new ResizeObserver(([{ contentRect }]) => {
    setMeasurements({ width: contentRect.width, height: contentRect.height });
  });
  useEffect(
    () => {
      observer.observe(elementRef.current);
      return () => observer.disconnect();
    },
    [elementRef]
  );
  return { width, height };
};

export default useAutoresize;
