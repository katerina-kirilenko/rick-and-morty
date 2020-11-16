import { makeStyles } from '@material-ui/core/styles';

export const useClasses = makeStyles((theme) => ({
  list: {
    marginTop: '0.3rem',
    '& ul': {
      paddingLeft: 0,
      [theme.breakpoints.down(500)]: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginTop: 0,
      },
    },
  },
  listHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem',
    fontSize: '12px',
    color: '#888',
    [theme.breakpoints.down(500)]: {
      display: 'none',
    },
    '& span': {
      width: '50%',
      textAlign: 'left',
    },
  },
}));
