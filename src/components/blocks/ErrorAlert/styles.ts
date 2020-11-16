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
      colors: '#e04545',
    },
  },
}));
