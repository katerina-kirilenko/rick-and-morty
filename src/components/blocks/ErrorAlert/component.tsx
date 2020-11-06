import React, { ReactElement } from 'react';
import { ErrorTextType } from './types';
import './style.css';

const ErrorAlert = ({ errorText }: ErrorTextType): ReactElement => {
  return (
    <div className="error-alert">
      <span>{errorText}</span>
    </div>
  );
};

export default ErrorAlert;
