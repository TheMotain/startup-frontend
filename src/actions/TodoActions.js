
export const ADD_TODO = "ADD_TODO";
export const CHECK_TODO = "CHECK_TODO";

let currentId = 0;

function nextId() {
    return currentId++;
}

export function addTodo(text) {
    return {
        type: ADD_TODO,
        id: nextId(),
        text: text
    }
}

export function checkTodo(id) {
    return {
        type: CHECK_TODO,
        id: id
    }
}