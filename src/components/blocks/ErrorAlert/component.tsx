import React, { ReactElement } from 'react';
import { ErrorTextType } from './types';
import { useClasses } from './styles';

const ErrorAlert = ({ errorText }: ErrorTextType): ReactElement => {
  const classes = useClasses();

  return (
    <div className={classes.errorAlert}>
      <span>{errorText}</span>
    </div>
  );
};

export default ErrorAlert;
