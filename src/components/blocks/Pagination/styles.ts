import { makeStyles } from '@material-ui/core/styles';

export const useClasses = makeStyles(() => ({
  pagination: {
    fontSize: '10px',
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
    lineHeight: '22px',
    margin: '3px 5px',
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
    letterSpacing: '1px',
    fontWeight: 500,
    background: '#e9e9e9',
    border: '1px solid #f1f1f1',
    borderRadius: '3px',
    color: 'rgb(51, 51, 51)',
    padding: '0px 8px',
    cursor: 'pointer',
    transition: '0.25s ease 0s',
    '&:hover': {
      background: '#d1d1d1',
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
