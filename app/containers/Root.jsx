import React from 'react';
import { Provider } from 'react-redux';
import App from './App.jsx';

import styles from '../styles/main.css';

export default ({ store }) =>
    <Provider store={store}>
        <App />
    </Provider>