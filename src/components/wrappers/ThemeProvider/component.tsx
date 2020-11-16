import React, { ReactElement } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider } from '@material-ui/core/styles';
import { styledComponentTheme } from 'theme/styledComponentTheme';
import { materialTheme } from 'theme/materialTheme';
import GlobalStyle from 'theme/GlobalStyle';
import { Props } from './types';

const ThemeProviderWrapper = ({ children }: Props): ReactElement => (
  <ThemeProvider theme={materialTheme}>
    <StyledThemeProvider theme={styledComponentTheme}>
      <>
        <GlobalStyle />
        {children}
      </>
    </StyledThemeProvider>
  </ThemeProvider>
);

export default ThemeProviderWrapper;
