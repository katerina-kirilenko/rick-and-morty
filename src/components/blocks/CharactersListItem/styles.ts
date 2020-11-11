import { makeStyles } from '@material-ui/core/styles';
import colors from 'theme/colors';

export const useClasses = makeStyles((theme) => ({
  listItem: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '12px',
    textAlign: 'left',
    padding: '0.3rem 0',
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
    [theme.breakpoints.down(500)]: {
      flexDirection: 'column',
      width: '47%',
      minHeight: '180px',
      minWidth: '110px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      margin: '4px',
      padding: '8px 6px',
      '& p': {
        maxWidth: '100%',
        textAlign: 'center',
        margin: '0.2rem 0',
      },
    },
  },
  avatar: {
    width: '40px',
    height: '40px',
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
