import hotkeys, { KeyHandler } from 'hotkeys-js';
import { useEffect, useState } from 'react';
import { anyFunction } from '@src/typings/utils';

export function useShortCut(
  shortcut: string,
  callback: KeyHandler,
  inputs?: any[],
) {
  useEffect(() => {
    hotkeys(shortcut, callback);

    return () => hotkeys.unbind(shortcut, callback);
  }, inputs);
}

export function useOnKeyPress(
  targetKey: string,
  {
    onPressStart,
    onPressEnd,
  }: { onPressStart: anyFunction; onPressEnd: anyFunction },
) {
  function downHandler({ key }: any) {
    if (key === targetKey) {
      onPressStart();
    }
  }

  const upHandler = ({ key }: any) => {
    if (key === targetKey) {
      onPressEnd();
    }
  };

  // Add event listeners
  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount
}
