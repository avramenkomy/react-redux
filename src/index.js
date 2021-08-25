import React from 'react';
import {render} from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import App from "./App";
import {rootReducer} from "./redux/rootReducer";

const store = createStore(rootReducer);

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
