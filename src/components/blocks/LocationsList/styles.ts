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
    fontSize: '12px',
    color: '#888',
    [breakpoints.down(500)]: {
      display: 'none',
    },
    '& span': {
      width: '100%',
      textAlign: 'left',
    },
  },
  listTitleName: {
    maxWidth: '40%',
  },
  listTitleType: {
    maxWidth: '30%',
  },
  listTitleDimension: {
    maxWidth: '30%',
  },
}));
