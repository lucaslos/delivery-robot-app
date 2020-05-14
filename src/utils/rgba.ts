import { hexToRgb } from './hexToRgb';
import { anyObj } from './typings';

const rgbCache: anyObj<string> = {};

export function rgba(hex: string, alpha: number) {
  if (!rgbCache[hex]) {
    rgbCache[hex] = hexToRgb(hex).join(',');
  }

  return `rgba(${rgbCache[hex]}, ${alpha})`;
}
