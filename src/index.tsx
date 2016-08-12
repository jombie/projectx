import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import {Router, Route, browserHistory, IndexRedirect} from "react-router";
import configureStore from './store/Store';
import TestComponent from './components/TestComponent';

const store = configureStore({});

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={TestComponent} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
