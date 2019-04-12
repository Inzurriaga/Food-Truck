import React from 'react';
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import ReactDOM from 'react-dom';
import './index.scss';
import thunk from "redux-thunk"
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from "./reducers/Index"
import App from './containers/app/App';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
