import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './reducer';
import { fetchBear } from './actions';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

let store = createStoreWithMiddleware(reducers);
store.dispatch(fetchBear());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));