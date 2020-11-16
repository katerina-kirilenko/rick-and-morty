import { makeStyles } from '@material-ui/core/styles';
import colors from 'theme/colors';

export const useClasses = makeStyles(({ breakpoints }) => ({
  container: {
    fontSize: '1.2rem',
    padding: '1rem',
    borderRadius: '0.5rem',
    backgroundColor: colors.backgroundLight,
    [breakpoints.down(426)]: {
      fontSize: '1rem',
    },
  },
  about: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignContent: 'center',
    borderBottom: '1px solid #adadad',
    paddingBottom: '1rem',
    [breakpoints.down(650)]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  photo: {
    width: '100%',
    maxWidth: '300px',
    maxHeight: '300px',
    overflow: 'hidden',
    marginRight: '3rem',
    borderRadius: '0.5rem',
    [breakpoints.down(650)]: {
      marginRight: 0,
      maxWidth: '200px',
      maxHeight: '200px',
    },
    '& img': {
      width: '100%',
    },
  },
  description: {
    textAlign: 'left',
    width: '70%',
    [breakpoints.down(650)]: {
      textAlign: 'center',
    },
    '& span': {
      color: '#adadad',
      marginRight: '0.5rem',
      [breakpoints.down(650)]: {
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
