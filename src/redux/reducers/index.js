import { combineReducers } from 'redux';
import {todoReducer} from '../reducers/todoReducer';
import { reducer as reduxFormReducer } from 'redux-form';

export const rootReducer = combineReducers({
    form: reduxFormReducer,
    todo: todoReducer
});
