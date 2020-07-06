import { storage } from '../../modules';

export const actionsType = {
    LOAD_DATA: 'ALL::LOCATIONS:LOAD:DATA',
    UPDATE_LOCATION: 'ALL::LOCATIONS:UPDATE:LOCATION',
    NETWORK_ERROR: 'ALL:LOCATIONS:NETWORK_ERROR'
};

const defaultState = {
    isLoading: true,
    locations: [],
    selectedValue: '',
    errorMessage: ''
};

export function locationReducer( state = defaultState, action ) {

    const { type, data } = action;

    switch ( type ) {

        case actionsType.LOAD_DATA : {

            return {
                ...state,
                isLoading: false,
                locations: data
            };

        }

        case actionsType.UPDATE_LOCATION: {
            
            return {
                ...state,
                selectedValue: data
            };

        }

        case actionsType.NETWORK_ERROR: {

            return {
                ...state,
                isLoading: false,
                errorMessage: data
            }

        }

        default : {
            
            return state;
        }

    }

}