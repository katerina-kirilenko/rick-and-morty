import { makeStyles } from '@material-ui/core/styles';
import colors from 'theme/colors';

export const useClasses = makeStyles(() => ({
  listItem: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    fontSize: '12px',
    textAlign: 'left',
    padding: '0 0.5rem',
    borderTop: '1px solid #ccc',
    backgroundColor: colors.backgroundLight,
    '&:hover': {
      backgroundColor: '#eee',
      transition: 'all 0.3s ease 0s',
      cursor: 'pointer',
    },
    '& p': {
      width: '100%',
      textAlign: 'left',
      margin: '6px 0',
      paddingRight: '0.6rem',
    },
  },
}));
