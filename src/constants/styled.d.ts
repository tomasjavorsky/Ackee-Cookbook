import 'styled-components';
import theme from './globalTheme';

type ThemeType = typeof theme;
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}