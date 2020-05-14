import { Theme as DefautTheme } from '@src/style/themes';

declare module '@emotion/react' {
  export interface Theme extends DefautTheme {}
}
