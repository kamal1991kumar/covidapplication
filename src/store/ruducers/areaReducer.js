
const defaultState = {
    isLoading: false
};

export function areaReducer( state = defaultState, action ) {

    const { type } = action;

    switch ( type ) {

        default : {
            return state;
        }

    }

}