import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import counterReducer from './store/reducers/counterReducer';
import resultReducer from './store/reducers/resultReducer';

const rootReducer = combineReducers({
    ctr: counterReducer,
    rlt: resultReducer

})

// to apply more enhancers e.g. Redux devtools:
const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Sample Middleware
const logger = store => {
   return next => {
       return action => {
           console.log('[Middleware] Dispatching', action);
           const result = next(action);
           console.log('[Middleware] next state', store.getState());
           return result;
       }
   }
};

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
