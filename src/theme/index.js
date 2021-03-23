import { createMuiTheme, colors } from '@material-ui/core';

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
      primary: colors.common.white,
      secondary: colors.lightBlue[400]
    }
  },
});

export default theme;
