import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from 'store';
import '../src/components/blocks/App/styles.ts';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
export const decorators = [
  (Story) => (
    <Router>
      <Provider store={store}>
        <Story />
      </Provider>
    </Router>
  ),
];
