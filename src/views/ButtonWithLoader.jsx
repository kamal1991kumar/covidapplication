import React from 'react';

export default function ButtonWithLoader( payload ) {

    const { children, showLoader, ...rest } = payload;

    return(
        <button { ...rest } disabled={ showLoader }>
            { showLoader ? <div className='loader' /> : null }
            <div>{ children }</div>
        </button>
    );

}

ButtonWithLoader.defaultProps = {
    showLoader: false
};