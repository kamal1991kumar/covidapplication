import React from 'react';

export default function SelectView( payload ) {

    const { options, type, value, onSelect, required } = payload;
    const _options = dataManipulation( options, type );

    return (
        <div className='inputField'>
            <select className='inputField__select' onChange={ onSelect } defaultValue={ value } required={ required } >
                <option value=''>Select</option>
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

SelectView.defaultProps = {
    required: false
};

const dataManipulation = ( options, type ) => {

    switch( type ) {

        case 'location': {

            return options && options.map( ( i ) => ({ value: i.id, displayLabel: i.location }) );

        }

        case 'allUser': {

            return options && options.map( ( i ) => ({ value: i.id, displayLabel: i.username }) );

        }

        case 'frequency': {

            return options && options.map( ( i ) => ({ value: i.id, displayLabel: i.frequency }) );

        }

        case 'category': {

            return options && options.map( ( i ) => ({ value: i.categoryId, displayLabel: i.categoryName }) );

        }

        case 'area': {

            return options && options.map( ( i ) => ({ value: i.areaId, displayLabel: i.areaName }) );

        }

        case 'download': {

            return [ {
                value: '0',
                displayLabel: 'Download Report'
            } ]

        }

        default: {
            return [];
        }

    }
}