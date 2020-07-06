import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import AuthHoc from '../hoc/authHoc';
import LoginPage from './login';
import Dashboard from './dashboard';
import NotFoundPage from './error';
import { rootStore } from '../store/index';

export default function Init() {

    return (
        <Provider store={rootStore}>
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact={true} render={(props) => {
                        return (
                            <AuthHoc {...props}>
                                <LoginPage  {...props} />
                            </AuthHoc>
                        );
                    }} />
                    <Route path='/dashboard' exact={true} render={(props) => {
                        return (
                            <AuthHoc {...props}>
                                <Dashboard  {...props} />
                            </AuthHoc>
                        );
                    }} />
                    <Route path='/not-found' exact={true} render={(props) => {
                        return (
                            <NotFoundPage  {...props} />
                        );
                    }} />
                    <Route path='*' exact={true} render={(props) => {
                        return (
                            <Redirect to='/not-found' />
                        );
                    }} />
                </Switch>
            </BrowserRouter>
        </Provider>
    );

}