import { anyObj } from '@src/typings/utils';

export type JsonIcon = {
  viewBox?: string;
  paths?: (anyObj | string)[];
};

const iconSet = {
  'chevron-left': {
    viewBox: '0 0 32 32',
    paths: ['M10 16L20 6L21.4 7.4L12.8 16L21.4 24.6L20 26L10 16Z'],
  },
  'chevron-right': {
    viewBox: '0 0 32 32',
    paths: ['M22 16L12 26L10.6 24.6L19.2 16L10.6 7.4L12 6L22 16Z'],
  },
  'chevron-down': {
    viewBox: '0 0 32 32',
    paths: ['M16 22L6 12L7.4 10.6L16 19.2L24.6 10.6L26 12L16 22Z'],
  },
  'chevron-up': {
    viewBox: '0 0 32 32',
    paths: ['M16 10L26 20L24.6 21.4L16 12.8L7.4 21.4L6 20L16 10Z'],
  },
};

// TODO: adjust all icons size, idea: create storie with all icons to adjust

if (__DEV__) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const testIconTypes: {
    [k: string]: JsonIcon;
  } = iconSet;
}

export default iconSet;
