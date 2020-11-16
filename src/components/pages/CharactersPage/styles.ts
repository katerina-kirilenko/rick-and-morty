import { makeStyles } from '@material-ui/core/styles';
import colors from 'theme/colors';

export const useClasses = makeStyles((theme) => ({
  container: {
    padding: '1rem',
    borderRadius: '0.5rem',
    backgroundColor: colors.backgroundLight,
    [theme.breakpoints.down(500)]: {
      padding: 0,
      backgroundColor: 'transparent',
    },
  },
}));
