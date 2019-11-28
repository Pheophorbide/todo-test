export const IS_TODO_CHECKED = 'IS_TODO_CHECKED';
export const IS_TODO_REMOVED = 'IS_TODO_REMOVED';
export const IS_TODO_ADDED = 'IS_TODO_ADDED';

export function checkItem(data) {
    return {
        type: IS_TODO_CHECKED,
        payload: data
    }
}

export function addItem(data) {
    return {
        type: IS_TODO_REMOVED,
        payload: data
    }
}

export function deleteItem(data) {
    return {
        type: IS_TODO_REMOVED,
        payload: data
    }
}
