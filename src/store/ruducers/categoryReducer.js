export const actionsType = {
    LOAD_DATA: 'ALL::CATEGORY:LOAD:DATA',
    UPDATE_LOCATION: 'ALL::CATEGORY:UPDATE:LOCATION',
    NETWORK_ERROR: 'ALL:CATEGORY:NETWORK_ERROR'
};

const defaultState = {
    isLoading: true,
    categories: [],
    errorMessage: ''
};

export function categoryReducer( state = defaultState, action ) {

    const { type, data } = action;

    switch ( type ) {

        case actionsType.LOAD_DATA: {
            return {
                ...state,
                isLoading: false,
                categories: data
            };

        }

        default : {
            return state;
        }

    }

}