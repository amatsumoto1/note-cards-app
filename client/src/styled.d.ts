import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string,
    colors: {
      main: string;
      secondary: string;
      headerMain: string;
      headerSecondary: string;
      headerLink: string;
      headerActiveLink: string;
      footerMain: string;
      footerSecondary: string;
      borderDark: string;
      borderLight: string;
      shadowDark: string;
    };
  }
}