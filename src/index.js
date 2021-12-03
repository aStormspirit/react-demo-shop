import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import { Provider } from 'react-redux'
import createStore from './store'
import 'semantic-ui-css/semantic.min.css'

const store = createStore();

/* setTimeout(() => {
  store.dispatch({
    type: 'SET_BOOK',
    payload: [1, 2, 3]
  })
}, 5000)
*/

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

