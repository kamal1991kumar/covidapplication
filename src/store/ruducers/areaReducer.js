export const actionsType = {
    LOAD_DATA: 'ALL::AREA:LOAD:DATA',
    UPDATE_LOCATION: 'ALL::AREA:UPDATE:LOCATION',
    NETWORK_ERROR: 'ALL:AREA:NETWORK_ERROR'
};

const defaultState = {
    isLoading: true,
    areas: [],
    errorMessage: ''
};

export function areaReducer( state = defaultState, action ) {

    const { type, data } = action;

    switch ( type ) {

        case actionsType.LOAD_DATA: {
            return {
                ...state,
                isLoading: false,
                areas: data
            };

        }

        default : {
            return state;
        }

    }

}