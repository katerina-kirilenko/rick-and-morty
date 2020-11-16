import { makeStyles } from '@material-ui/core/styles';
import colors from 'theme/colors';

export const useClasses = makeStyles(() => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.7rem 0',
    backgroundColor: colors.backgroundDark,
  },
  headerLinks: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
    lineHeight: '1.6rem',
  },
  link: {
    padding: '0 8px',
    textDecoration: 'none',
    textTransform: 'capitalize',
    color: '#fff',
    '&:hover': {
      color: colors.primaryColor,
    },
  },
  linkActive: {
    color: colors.primaryColor,
  },
}));
