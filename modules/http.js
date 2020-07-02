import { storage } from './index';
import Axios from 'axios';
Axios.defaults.baseURL = 'https://covid-compliance-application.herokuapp.com';

Axios.interceptors.request.use( function( config ) {

    const _token = storage.token.get();

    if( _token != null ) {
        config.headers.Authorization = `Bearer ${_token}`;
    }

    return config;

}, function( error ) {
    return Promise.reject( error );
} );

Axios.interceptors.response.use( function( response ){

    return Promise.resolve( response.data );

}, function(error){

    if (error.message === 'Network Error' && !error.response) {

        Promise.reject({
            status: 'failure',
            message: 'Network Not found.'
        });

    } else {
        return Promise.reject(error.response.data);
    }

});

export const http = {
    userEmailVerification(data) {
        return Axios.post('/username', data);
    },
    userPasswordVerification(data) {
        return Axios.post('/password', data);
    },
    demo(data) {
        return Axios.get('/admin', data);
    }
}