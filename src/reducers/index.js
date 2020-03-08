const initialState = {
    items: [],
    count:0
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
                count: state.items.length
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
                count : newListAfterChangeCompl.length
            };

        case 'REMOVE_TASK':
            const removeItemIndex = state.items.findIndex(item => item.id === action.id);
            const newListAfterRemove = [
                ...state.items.slice(0, removeItemIndex),
                ...state.items.slice(removeItemIndex + 1)
            ];
            return {
                items : newListAfterRemove,
                count : newListAfterRemove.length
            };

        default:
            return state;
    }
}
export default reducer;