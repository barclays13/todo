const initialState = {
    items: [],
    itemsFilter: [],
    filter: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            state.items.push({
                id : action.id,
                text : document.querySelector('.discription-task').value,
                completed : false
            })
            return {
                items: state.items,
                itemsFilter: [],
                filter: 'ALL'
            };

        case 'CHANGE_ACTIVITY':
            const changeIndexItem = state.items.findIndex(item => item.id === action.id);
            const newListAfterChangeCompl = [
                ...state.items.slice(0, changeIndexItem),
                {
                    id : state.items[changeIndexItem].id,
                    text : state.items[changeIndexItem].text,
                    completed : !state.items[changeIndexItem].completed
                },
                ...state.items.slice(changeIndexItem + 1)
            ];
            return {
                items : newListAfterChangeCompl,
                itemsFilter: [],
                filter: 'ALL'
            };

        case 'REMOVE_TASK':
            const removeItemIndex = state.items.findIndex(item => item.id === action.id);
            const newListAfterRemove = [
                ...state.items.slice(0, removeItemIndex),
                ...state.items.slice(removeItemIndex + 1)
            ];
            return {
                items : newListAfterRemove,
                itemsFilter: [],
                filter: 'ALL'
            };

        case 'SHOW_ALL_TASKS' :
            const allTasks = state.items.filter(item => item.completed === false || item.completed === true);
            return {
                items: state.items,
                itemsFilter: allTasks,
                filter: 'ALL'
            };

        case 'SHOW_ACTIVE_TASKS' :

            const activeTasks = state.items.filter(item => item.completed === false);
            return {
                items: state.items,
                itemsFilter: activeTasks,
                filter: 'ACTIVE'
            };

        case 'SHOW_COMPLETED_TASKS' :
            const completedTasks = state.items.filter(item => item.completed === true);
            return {
                items: state.items,
                itemsFilter: completedTasks,
                filter: 'COMPLETED'
            };

        default:
            return state;
    }
}
export default reducer;