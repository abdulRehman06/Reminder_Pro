import React from 'react';
import ReactDom from 'react-dom';
import App from './component/App'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/rootReducers.js'
const store = createStore(reducer);


ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('root')
)

