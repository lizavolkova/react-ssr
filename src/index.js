import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux'
import { history } from './middlewares/router';
import { store } from './store';
import './index.css';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';

export const rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    rootElement
);

//registerServiceWorker();
