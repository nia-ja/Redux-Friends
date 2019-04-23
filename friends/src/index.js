import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from "./reducers";


import './index.css';
import App from './App';

const store = createStore(
    reducer,
    applyMiddleware(thunk, logger)
);

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>,
    document.getElementById('root')
);