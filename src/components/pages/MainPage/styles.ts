import { makeStyles } from '@material-ui/core/styles';
import colors from 'theme/colors';

export const useClasses = makeStyles((theme) => ({
  mainPage: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',

    background: colors.backgroundDark,
  },
  pageDescription: {
    background: '#fff',
    width: '100%',
    height: '30vh',
    padding: '0.5rem',
    '& p': {
      margin: '0.4rem',
    },
    [theme.breakpoints.down(726)]: {
      height: 'auto',
    },
  },
  menuCards: {
    display: 'flex',
    justifyContent: 'space_between',
    alignItems: 'center',
    flexWrap: 'wrap',
    maxWidth: '728px',
    height: '70vh',
    padding: '0 1rem',
    [theme.breakpoints.down(726)]: {
      justifyContent: 'center',
      height: 'auto',
    },
  },
}));
