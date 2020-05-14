import { useEffect } from 'react';

function checkIfTargetContainsRef(
  ref: React.RefObject<HTMLElement>,
  target: Node,
) {
  return !ref.current || ref.current.contains?.(target);
}

export function useOnClickOutside(
  ref: React.RefObject<HTMLElement> | React.RefObject<HTMLElement>[],
  handler: (event: MouseEvent) => any,
) {
  useEffect(
    () => {
      const listener = (event: MouseEvent) => {
        // Do nothing if clicking ref's element or descendent elements

        if (
          Array.isArray(ref)
            ? ref.some(item =>
                checkIfTargetContainsRef(item, event.target as Node),
              )
            : checkIfTargetContainsRef(ref, event.target as Node)
        ) {
          return;
        }

        handler(event);
      };

      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);

      return () => {
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
      };
    }, // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler],
  );
}
