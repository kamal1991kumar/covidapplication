import { combineReducers } from 'redux';
import { areaReducer } from './areaReducer';
import { locationReducer } from './locationReducer';
import { categoryReducer } from './categoryReducer';

export const rootReducers = combineReducers( {
    areaReducer,
    locationReducer,
    categoryReducer
} );