//@flow
export const ADD_TODO = "ADD_TODO";
export const CHECK_TODO = "CHECK_TODO";

let currentId = 0;

function nextId() {
    return currentId++;
}

export function addTodo(text: string) {
    return {
        type: ADD_TODO,
        payload: {
            id: nextId(),
            text: text
        }
    }
}

export function checkTodo(id: number) {
    return {
        type: CHECK_TODO,
        payload: {
            id: id
        }
    }
}