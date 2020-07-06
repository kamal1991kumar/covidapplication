import { createStore } from 'redux';
import { rootReducers } from './ruducers/index';

export const rootStore = createStore( rootReducers );