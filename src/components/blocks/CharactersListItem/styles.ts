import { makeStyles } from '@material-ui/core/styles';
import colors from 'theme/colors';

export const useClasses = makeStyles(({ breakpoints }) => ({
  listItem: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '1rem',
    textAlign: 'left',
    padding: '0.4rem 0',
    borderTop: '1px solid #ccc',
    backgroundColor: colors.backgroundLight,
    '&:hover': {
      backgroundColor: '#eee',
      transition: 'all 0.3s ease 0s',
      cursor: 'pointer',
    },
    '& p': {
      width: '100%',
    },
    [breakpoints.down(500)]: {
      flexDirection: 'column',
      width: '47%',
      minHeight: '200px',
      minWidth: '110px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      margin: '4px',
      padding: '8px 6px',
      '& p': {
        maxWidth: '100%',
        textAlign: 'center',
        margin: '0.2rem 0',
        fontSize: '0.8rem',
      },
    },
  },
  avatar: {
    width: '62px',
    height: '62px',
    borderRadius: '5px',
    boxShadow: 'rgba(54, 38, 38, 0.4) 0px 2px 4px -1px',
  },
  characterName: {
    maxWidth: '15%',
  },
  characterStatus: {
    maxWidth: '15%',
  },
  characterLocation: {
    maxWidth: '25%',
  },
  characterOrigin: {
    maxWidth: '25%',
  },
}));
