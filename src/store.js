import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from 'reducer/';
import saga from 'sagas/';

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(saga);
