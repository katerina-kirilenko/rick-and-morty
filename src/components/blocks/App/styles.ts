import { makeStyles } from '@material-ui/core/styles';
import colors from 'theme/colors';

export const useClasses = makeStyles(() => ({
  app: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    background: colors.backgroundDark,
    fontSize: '1.5rem',
    minHeight: '100vh',
  },
}));
