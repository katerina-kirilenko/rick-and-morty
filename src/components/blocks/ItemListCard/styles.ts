import { makeStyles } from '@material-ui/core/styles';
import colors from 'theme/colors';

export const useClasses = makeStyles(() => ({
  itemList: {
    fontSize: '1.2rem',
    width: '7rem',
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    margin: '0 0.6rem 0.6rem 0',
    padding: '0.6rem 1rem',
    overflow: 'hidden',
    backgroundColor: '#696969',
  },
  default: {
    color: '#fff',
  },
  hover: {
    color: colors.primaryColor,
  },
}));
