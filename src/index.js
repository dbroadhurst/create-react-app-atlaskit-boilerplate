import React from 'react'
import ReactDOM from 'react-dom'
import App from './AppContainer'
import './index.css'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'

import reducers from './reducers'
import createSagaMiddleware from 'redux-saga'

import sagas from './sagas'

import { AtlaskitThemeProvider } from '@atlaskit/theme'

const sagaMiddleware = createSagaMiddleware()

let composeEnhancers = compose

if (process.env.NODE_ENV === 'development') {
  const composeWithDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  if (typeof composeWithDevToolsExtension === 'function') {
    composeEnhancers = composeWithDevToolsExtension
  }
}

const store = createStore(reducers, composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(sagas)

const themeMode = 'light'

ReactDOM.render(
  <AtlaskitThemeProvider mode={themeMode}>
    <Provider store={store}>
      <App />
    </Provider>
  </AtlaskitThemeProvider>,
  document.getElementById('root')
)
