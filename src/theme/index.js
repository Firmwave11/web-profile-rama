import { createMuiTheme, colors } from '@material-ui/core';
import typography from './typhography';

const theme = createMuiTheme({
  palette: {
    background: {
      dark: '#31313a',
      default: colors.common.white,
      paper: colors.common.white
    },
    primary: {
      main: '#31313a'
    },
    secondary: {
      main: colors.lightBlue[400],
    },
    text: {
      primary: colors.grey[300],
      secondary: colors.lightBlue[400]
    },
  },
  typography: {
    allVariants: {
      color: colors.grey[300],
    },
  }
});

export default theme;
