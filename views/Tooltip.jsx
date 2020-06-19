import React from 'react';

export default function Tooltip( props ) {

    const { children, title } = props;

    return(
        <div className='tooltip'>
            <div className='tooltip__title'>{ title }</div>
            <div className='tooltip__content'>
                { children }
            </div>
        </div>
    );

}