import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider, ThemeConfig, Divider } from 'bumbag';
import { faAddressBook, faSnowflake, faClock, faSmile, faSave, faEdit, faTrashAlt, faBell, faBookmark } from '@fortawesome/free-regular-svg-icons';

const theme: ThemeConfig = {
  Icon: {
    iconSets: [
      {
        icons: [faAddressBook, faSnowflake, faClock, faSmile, faSave, faEdit, faTrashAlt, faBell, faBookmark],
        type: "font-awesome"
      }
    ]
  },

  Card: {
    styles: {
      base: {
        borderRadius: "1",
        background: 'white'
      }
    }
  },

  Button: {
    styles: {
      base: {
        borderRadius: "1",
      }
    }
  },

  palette: {
    modes: {
      dark: {
        background: '#1a212d',
        text: 'white'
      },
      default: {
        background: '#d0d4da'
      }
    }
  },

  borders: {
    default: {
      color: '#b1b7c2',
      width: '1px'
    }
  },

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
