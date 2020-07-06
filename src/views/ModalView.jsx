import React from 'react';

export default function ModalView( props ) {

    const { closeHandler, title } = props;

    return(
        <div className='modal'>
            <div className='modal__container'>
                <div className='modal__head'>
                    <h3 className='heading heading--h3'>{ title }</h3>
                    <div className='modal__close' onClick={ closeHandler }>
                        <img src='/images/close.svg' alt='close' />
                    </div>
                </div>
                <div className='modal__body'>
                    { props.children }
                </div>
            </div>
        </div>
    );
}