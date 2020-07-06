import React from 'react';
import { utils } from '../modules';
import Header from '../views/HeaderView';
export default class AuthHoc extends React.Component{

    componentDidMount() {

        const { history, location } = this.props;

        if( ! utils.isAuthorizedUser() ) {
            history.push( '/' );
            
        } else {
            if( location.pathname !== '/' ) {
                history.push( location.pathname );
            } else {
                history.push( '/dashboard' );
            }
        }
    }

    render() {

        const { path } = this.props.match;

        return(
            <>
                { path === '/' ? null : <Header { ...this.props }/>}
                { this.props.children }
            </> 
        );
    }

}