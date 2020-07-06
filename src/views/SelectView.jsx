import React from 'react';

export default function SelectView( payload ) {

    const { options, type, value, onSelect } = payload;
    const _options = dataManipulation( options, type );

    return (
        <div className='inputField'>
            <select className='inputField__select' onChange={ onSelect } defaultValue={ value }>
                {
                    _options.map( ( i ) => {
                        return(
                            <option
                                key={ i.value }
                                value={ i.value }
                            >
                                { i.displayLabel }
                            </option>
                        );
                    } )
                }
            </select>
        </div>
    );

}

const dataManipulation = ( options, type ) => {

    switch( type ) {

        case 'location': {

            return options && options.map( ( i ) => ({ value: i.id, displayLabel: i.location }) );

        }

        default: {
            return [];
        }

    }
}