import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from 'components/blocks/App';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();
