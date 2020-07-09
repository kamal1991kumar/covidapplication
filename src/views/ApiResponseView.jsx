import React from 'react';

export default function ApiResponseView( payload ) {

    const { message } = payload;

    return(
        <div className='modal__message'>
            { message }
        </div>
    );

}