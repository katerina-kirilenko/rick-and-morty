import { makeStyles } from '@material-ui/core/styles';
import colors from 'theme/colors';

export const useClasses = makeStyles(() => ({
  container: {
    fontSize: '0.85rem',
    padding: '1rem',
    borderRadius: '0.5rem',
    backgroundColor: colors.backgroundLight,
    textAlign: 'left',
  },
  description: {
    textAlign: 'left',
    width: '70%',
    '& span': {
      color: '#adadad',
      marginRight: '0.5rem',
    },
    '& *': {
      margin: '0 0 0.7rem 0',
    },
  },
  characters: {
    textAlign: 'left',
  },
  charactersList: {
    columnWidth: '200px',
    columnCount: 3,
    columnGap: '50px',
  },
}));
