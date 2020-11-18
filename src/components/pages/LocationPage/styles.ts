import { makeStyles } from '@material-ui/core/styles';
import colors from 'theme/colors';

export const useClasses = makeStyles(({ breakpoints }) => ({
  container: {
    fontSize: '1.2rem',
    padding: '1rem',
    borderRadius: '0.5rem',
    backgroundColor: colors.backgroundLight,
    textAlign: 'left',
    [breakpoints.down(426)]: {
      fontSize: '1rem',
    },
  },
  description: {
    textAlign: 'left',
    borderBottom: '1px solid #adadad',
    '& span': {
      color: '#adadad',
      marginRight: '0.5rem',
    },
    '& *': {
      margin: '0 0 1rem 0',
    },
  },
  characters: {
    textAlign: 'left',
  },
  charactersList: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingLeft: '0',
  },
}));
