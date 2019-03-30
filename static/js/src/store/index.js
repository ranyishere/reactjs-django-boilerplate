import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';


export const history = createBrowserHistory()

const store = createStore(
  reducers(history),
  {},
  composeWithDevTools(
    compose(
      applyMiddleware(
        thunk, logger,
        routerMiddleware(history)
      ),
    )
  )
);

export default store;
