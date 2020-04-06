import React from 'react';
import ReactDom from 'react-dom';
import './index.css'
import App from './component/App'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {rootReducer}  from './reducer/rootReducer'
const store = createStore(rootReducer)

ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider> , document.getElementById('root'))

