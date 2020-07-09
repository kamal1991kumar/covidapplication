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

    if (error.message === 'Network Error' && !error.response ) {

        return Promise.reject({
            status: 'failure',
            message: 'Network Not found.'
        });

    } else if ( error.response.status === 403 ) {

        return Promise.reject({
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
    area: {
        getAll() {
            return Axios.get('/area');
        },
        add( data ) {
            return Axios.post('/addArea', data );
        }
    },
    category: {
        getAll() {
            return Axios.get('/category');
        },
        add( data ) {
            return Axios.post('/addCategory', data );
        }
    },
    getCommonApi() {
        const location = Axios.get('/location');
        const allusers = Axios.get('/allusers');
        const frequency = Axios.get('/frequency');

        return Axios.all( [ location, allusers, frequency ] );
    },
    task: {
        getAll() {
            return Axios.get('/allTasks');
        },
        add( data ) {
            return Axios.post('/addTask', data);
        }
    }
}