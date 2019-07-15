import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import configureStore from './redux/configureStore';

const store = configureStore();

const app = <Provider store={store}>
                <BrowserRouter>
                   <App/>
                </BrowserRouter>
            </Provider>


ReactDOM.render(app, document.getElementById('root'));


