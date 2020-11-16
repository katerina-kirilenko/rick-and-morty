import { makeStyles } from '@material-ui/core/styles';

export const useClasses = makeStyles(({ breakpoints }) => ({
  list: {
    marginTop: '0.3rem',
    '& ul': {
      paddingLeft: 0,
      [breakpoints.down(500)]: {
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
    fontSize: '1.2rem',
    color: '#888',
    [breakpoints.down(500)]: {
      display: 'none',
    },
    '& span': {
      width: '100%',
      textAlign: 'left',
    },
  },
  listTitleImg: {
    maxWidth: '40px',
  },
  listTitleName: {
    maxWidth: '15%',
  },
  listTitleStatus: {
    maxWidth: '15%',
  },
  listTitleOrigin: {
    maxWidth: '25%',
  },
  listTitleLocation: {
    maxWidth: '25%',
  },
}));
