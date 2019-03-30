import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from './components';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import store from './store'


window.onload = () => {
  const mountPoint = document.getElementById('app-mount')
  const baseApiUrl = mountPoint.attributes['data-base-api-url'].value

  ReactDOM.render(
    <Provider store={store}>
      <AppContainer baseApiUrl={baseApiUrl}/>
    </Provider>,
    mountPoint
  )
}
