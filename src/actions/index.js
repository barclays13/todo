const addTask = (id) => {
    return {
        type : 'ADD_TASK',
        id: id
    };
};

const changeActivity = (id) => {
    return {
        type : 'CHANGE_ACTIVITY',
        id: id
    };
};
const removeTask = (id) => {
    return {
        type : 'REMOVE_TASK',
        id: id
    };
};

export {
    addTask,
    changeActivity,
    removeTask
};