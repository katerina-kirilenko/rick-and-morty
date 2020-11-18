import { makeStyles } from '@material-ui/core/styles';
import colors from 'theme/colors';

export const useClasses = makeStyles(({ breakpoints }) => ({
  listItem: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    fontSize: '1rem',
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
      margin: '1rem 0',
      paddingRight: '0.5rem',
      [breakpoints.down(500)]: {
        fontSize: '0.8rem',
        margin: '0.5rem 0',
      },
    },
  },
  locationName: {
    maxWidth: '40%',
  },
  locationType: {
    maxWidth: '30%',
  },
  locationDimension: {
    maxWidth: '30%',
  },
}));
