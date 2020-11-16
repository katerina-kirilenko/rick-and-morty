import { createMuiTheme } from '@material-ui/core/styles';

export const materialTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#ff4400',
      light: '#ddd',
      dark: '#000',
      contrastText: 'red',
    },
  },
});
