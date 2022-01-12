
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// https://edvins.io/how-to-use-redux-persist-with-redux-toolkit
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

import App from './App';
import store from './store.js'

import reportWebVitals from './reportWebVitals';

let persistor = persistStore(store);

ReactDOM.render(
  // Disable StrictMode to get rid of double dispatch calls -> https://stackoverflow.com/questions/54892403/usereducer-action-dispatched-twice
  // <React.StrictMode> // TODO: don't forget about this being comm'd out
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />  
      </PersistGate>
    </ Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
