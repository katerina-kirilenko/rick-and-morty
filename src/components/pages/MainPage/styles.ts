import { makeStyles } from '@material-ui/core/styles';
import colors from 'theme/colors';

export const useClasses = makeStyles(({ breakpoints }) => ({
  mainPage: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    background: colors.backgroundDark,
  },
  pageDescription: {
    background: '#fff',
    width: '100vw',
    height: '16rem',
    padding: '0.5rem',
    '& p': {
      margin: '0.4rem',
    },
    [breakpoints.down(726)]: {
      height: 'auto',
    },
  },
  menuCards: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    maxWidth: '1200px',
    height: '70vh',
    padding: '0 1rem',
    [breakpoints.down(968)]: {
      justifyContent: 'center',
      height: 'auto',
    },
  },
}));
