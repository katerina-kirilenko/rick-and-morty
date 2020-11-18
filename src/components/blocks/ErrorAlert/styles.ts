import { makeStyles } from '@material-ui/core/styles';

export const useClasses = makeStyles(() => ({
  errorAlert: {
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    wordBreak: 'break-word',
    '& span': {
      textAlign: 'center',
      color: '#e04545',
      display: 'block',
      width: '70%',
      backgroundColor: '#ffe7e4',
      border: '1px solid #e04545',
      padding: '2rem',
    },
  },
}));
