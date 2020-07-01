import React from 'react';
import LoginPageView from '../views/LoginPageView';
import { http } from '../modules';

export default class LoginPage extends React.Component {

    state = {
        isLoading: false,
        userVerificationScreen: false,
        isValidField: true,
        username: 'kamal.kumar@xebia.com',
        password: ''
    }


    onInputChange = (payload) => {
        this.setState({ ...this.state, ...payload });
    }

    onUserVerificationSubmit = (e) => {
        e.preventDefault();
        this.setState({ isLoading: true }, this.verifiedUserName);

    }

    verifiedUserName = () => {
        const { username } = this.state;
        http.userEmailVerification({ username }).then(() => {

            this.setState({ isLoading: false, userVerificationScreen: true, isValidField: true });

        }).catch(() => {
            this.setState({ isLoading: false, isValidField: false });
        });
    }

    onPasswordVerificationSubmit = (e) => {
        e.preventDefault();
        this.setState({ isLoading: true }, () => {

            const { password } = this.state;
            http.userPasswordVerification({ password }).then(() => {

                this.props.Router.push('/dashboard');
    
            }).catch(() => {
                this.setState({ isLoading: false, isValidField: false });
            });

        });

    }

    render() {
        return (
            <LoginPageView
                {...this.state}
                onInputChange={this.onInputChange}
                onUserVerificationSubmit={this.onUserVerificationSubmit}
                verifiedUserName={this.verifiedUserName}
                onPasswordVerificationSubmit={ this.onPasswordVerificationSubmit }
            />
        );
    }

}
