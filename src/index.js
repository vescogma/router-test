import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter as Router } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import registerServiceWorker from './registerServiceWorker';
import { getConfiguredStore } from './create-store';
import { App } from './features/app/app';

import './global/styles/index.css';

const history = createHistory();
const store = getConfiguredStore(history);

const Root = () => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));

registerServiceWorker();
