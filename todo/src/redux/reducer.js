import { ADD_TODO_ITEM, TOGGLE_TODO_STATUS} from './actions';

const initialState = {
    todo: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        
        case ADD_TODO_ITEM:
        return [
            ...this.state.todos, {
                id: state.length + 1, 
                title: action.title, 
                complete: false}]

        case TOGGLE_TODO_STATUS:
                return state = state.map(todo =>{
                    if (todo.id === action.id) {
                        return {id: todo.id, 
                            title: todo.title, complete: !todo.complete};
                    }
                    return todo;
                })
                
        default: 
            return state;
    }
}

export default reducer;