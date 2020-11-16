import { makeStyles } from '@material-ui/core/styles';
import colors from 'theme/colors';

export const useClasses = makeStyles(() => ({
  app: {
    textAlign: 'center',
    background: colors.backgroundDark,
  },
}));
