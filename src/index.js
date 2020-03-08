import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import RestoServiceContext from './components/resto-service-context';
import store from './store';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <Provider store={store}>
            <RestoServiceContext.Provider >
                <Router>
                    <App/>
                </Router>
            </RestoServiceContext.Provider>
    </Provider>
    , document.getElementById('root'));

