const addTask = () => {
    return {
        type : 'ADD_TASK'
    };
};

const changeActivity = () => {
    return {
        type : 'CHANGE_ACTIVITY'
    };
};
const removeTask = (id) => {
    return {
        type : 'REMOVE_TASK',
        payload: id
    };
};

export {
    addTask,
    changeActivity,
    removeTask
};