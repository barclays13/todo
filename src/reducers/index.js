const initialState = {
    items: [],
    count:0,
    completed: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            const discriptionTask = document.querySelector('.discription-task').value;
            state.items.push(discriptionTask);
            return {
                items: state.items,
                count: state.items.length,
                completed: state.completed
            };

        case 'CHANGE_ACTIVITY':
            const newStateCompleted = !state.completed;
            return {
                ...state,
                completed: newStateCompleted
            };

        case 'REMOVE_TASK':
            const itemIndex = state.items.findIndex(item => item === action.payload);
            const it = [
                ...state.items.slice(0, itemIndex),
                ...state.items.slice(itemIndex + 1)
            ];
            return {
                items: it,
                count: it.length
            };

        default:
            return state;
    }
}
export default reducer;