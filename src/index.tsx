import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider, ThemeConfig } from 'bumbag';
import { faAddressBook, faSnowflake, faClock } from '@fortawesome/free-regular-svg-icons';

const theme: ThemeConfig = {
  Icon: {
    iconSets: [
      {
        icons: [faAddressBook, faSnowflake, faClock],
        type: "font-awesome"
      }
    ]
  }
};

ReactDOM.render(
  <React.StrictMode>
    <Provider theme={theme}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
