import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app'
import store from './redux/configureStore'

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
       <App/>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);