import React from 'react';

export default function NotFoundPage( props ) {

    return(
        <div className='errorPage'>
            <div className='errorPage__logo'>
                <img src='/images/Logo-white.svg' width='150' alt='Xebia' />
            </div>
            <div className='errorPage__title'>404</div>
            <div className='errorPage__message'>Oops! Something is wrong.</div>
            <button className='btn btn__parimary' onClick={() => props.history.goBack()}>Go to initial page</button>
        </div>
    );

}