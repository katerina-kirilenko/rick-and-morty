import { makeStyles } from '@material-ui/core/styles';
import colors from 'theme/colors';

export const useClasses = makeStyles(() => ({
  menuCard: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    margin: '1rem',
    maxWidth: '280px',
    minHeight: '340px',
    backgroundColor: 'rgb(60, 62, 68)',
    boxShadow: 'rgba(0, 0, 0, 0.3) 0px 4px 6px -1px, rgba(0, 0, 0, 0.3) 0px 2px 4px -1px',
    borderRadius: '0.5rem',
    overflow: 'hidden',
    '& div': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    '&:hover': {
      cursor: 'pointer',
      '& h3': {
        color: colors.primaryColor,
      },
    },
  },
  imgWrapper: {
    '& img': {
      width: '100%',
    },
  },
  cardTitle: {
    color: 'rgb(216, 216, 216)',
    textTransform: 'capitalize',
  },
}));
