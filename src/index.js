import React from 'react'
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router'
import {Provider} from 'react-redux';
import {applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import  reducers from './reducers/combinReducers';
import {createStore} from 'redux-async-actions-reducers';
import Index from './containers/index'
const store = createStore(reducers, applyMiddleware(thunk));

const CreditPermissionCheck = (nextState, cb) => {
    require.ensure([], () => {
        cb(null, require('./containers/creditPermissionCheck'));
    });
};

const Root = (
    <Provider store={createStore(reducers)}>
        <Router history={browserHistory}>
            <Route path="/" component={Index}>
                <Route path="creditpermissioncheck" getComponent={CreditPermissionCheck}></Route>

            </Route>
        </Router>
    </Provider>
);

ReactDOM.render(Root, document.getElementById("app"));
