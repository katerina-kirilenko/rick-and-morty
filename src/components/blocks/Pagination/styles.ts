import { makeStyles } from '@material-ui/core/styles';

export const useClasses = makeStyles(({ breakpoints }) => ({
  pagination: {
    fontSize: '1rem',
    listStyle: 'none',
    paddingLeft: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  paginationItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationItemLink: {
    margin: '3px 5px',
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
    letterSpacing: '1px',
    fontWeight: 500,
    background: '#e9e9e9',
    border: '1px solid #f1f1f1',
    borderRadius: '3px',
    color: 'rgb(51, 51, 51)',
    padding: '8px 12px',
    cursor: 'pointer',
    transition: '0.25s ease 0s',
    '&:hover': {
      background: '#d1d1d1',
    },
    [breakpoints.down(500)]: {
      fontSize: '0.8rem',
      padding: '4px 8px',
    },
  },
  current: {
    '& a': {
      background: '#d1d1d1',
    },
  },
  inactive: {
    '& a': {
      cursor: 'default',
      background: '#e9e9e9',
      '&:hover': {
        color: 'rgb(51, 51, 51)',
        background: '#e9e9e9',
      },
    },
  },
}));
