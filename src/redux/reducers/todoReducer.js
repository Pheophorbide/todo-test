import uuid from 'uuid';
import {
    IS_TODO_REMOVED,
    IS_TODO_ADDED,
    IS_TODO_CHECKED
} from '../action/todoAction';

const initialStore = {
    data: [
        {
            id: uuid(),
            name: 'Покормить собаку',
            isChecked: false
        }
    ]
};

export function todoReducer(store = initialStore, action) {
    switch (action.type) {
        case IS_TODO_REMOVED:
            return {store, ...{data: action.payload}};
        case IS_TODO_ADDED:
            return {store, ...{data: action.payload}};
        case IS_TODO_CHECKED:
            return {store, ...{data: action.payload}};
        default:
            return store;
    }
}

