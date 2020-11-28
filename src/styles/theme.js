import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    greenDark: '#05C46B',
    greenLight: '#0BE881',
    dark: '#1E272E',
    yellow: '#FFD32A',
    whiteDark: '#FBFBFB',
    white: '#fff',
    gray: '#B7B7B7',
  },
  fontSizes: {
    mobile: {
      sm: '1.8rem',
      md: '2.4rem',
      lg: '3.2rem',
    }
  },
};
Object.freeze(theme);

function Theme({ children }) {
  return <ThemeProvider theme={theme}>{ children }</ThemeProvider>
}

export default Theme;
