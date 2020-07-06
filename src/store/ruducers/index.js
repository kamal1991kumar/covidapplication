import { combineReducers } from 'redux';
import { areaReducer } from './areaReducer';
import { locationReducer } from './locationReducer';

export const rootReducers = combineReducers( {
    areaReducer,
    locationReducer
} );