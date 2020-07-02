import Axios from 'axios';
Axios.defaults.baseURL = 'https://covid-compliance-application.herokuapp.com';
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
    }
}