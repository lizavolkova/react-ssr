import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware } from 'redux';
import router from './router';

export default composeWithDevTools(
    applyMiddleware(router)
);
