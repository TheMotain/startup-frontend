import * as TodoActions from './TodoActions'

describe('todo actions', () => {
    it('addTodo should create ADD_TODO action', () => {
        expect(TodoActions.addTodo('Use Redux')).toEqual({
            type: TodoActions.ADD_TODO,
            text: 'Use Redux'
        })
    })

});
