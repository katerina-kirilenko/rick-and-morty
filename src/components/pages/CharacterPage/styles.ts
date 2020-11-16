import { makeStyles } from '@material-ui/core/styles';
import colors from 'theme/colors';

export const useClasses = makeStyles(({ breakpoints }) => ({
  container: {
    fontSize: '0.85rem',
    padding: '1rem',
    borderRadius: '0.5rem',
    backgroundColor: colors.backgroundLight,
  },
  about: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignContent: 'center',
    borderBottom: '1px solid #adadad',
    paddingBottom: '1rem',
    [breakpoints.down(500)]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  photo: {
    width: '200px',
    height: '200px',
    overflow: 'hidden',
    marginRight: '3rem',
    borderRadius: '0.5rem',
    [breakpoints.down(500)]: {
      marginRight: 0,
    },
    '& img': {
      maxWidth: '200px',
      maxHeight: '200px',
      width: '100%',
    },
  },
  description: {
    textAlign: 'left',
    width: '70%',
    [breakpoints.down(500)]: {
      textAlign: 'center',
    },
    '& span': {
      color: '#adadad',
      marginRight: '0.5rem',
      [breakpoints.down(500)]: {
        display: 'block',
      },
    },
  },
  episodes: {
    textAlign: 'left',
  },
  episodesList: {
    columnWidth: '200px',
    columnCount: 3,
    columnGap: '50px',
  },
}));
