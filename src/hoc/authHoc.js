import React from 'react';
import { utils } from '../modules';

export default class AuthHoc extends React.Component{

    componentDidMount() {
        if( ! utils.isAuthorizedUser() ) {
            this.props.Router.push( '/' );
            
        } else {
            if( this.props.Router.pathname !== '/' ) {
                this.props.Router.push( this.props.Router.pathname );
            } else {
                this.props.Router.push( '/dashboard' );
            }
        }
    }

    render() {
        return this.props.children;
    }

}