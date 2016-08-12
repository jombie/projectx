import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { testReducer } from './reducers/TestReducer'
import TestComponent from './TestComponent'

let store = createStore(testReducer)

render(
  <Provider store={store}>
    <TestComponent />
  </Provider>,
  document.getElementById('root')
)
