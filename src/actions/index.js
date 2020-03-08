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
const showAllTasks = () => {
    return {
        type : 'SHOW_ALL_TASKS'
    };
};
const showActiveTasks = () => {
    return {
        type : 'SHOW_ACTIVE_TASKS'
    };
};
const showCompletedTasks = () => {
    return {
        type : 'SHOW_COMPLETED_TASKS'
    };
};

export {
    addTask,
    changeActivity,
    removeTask,
    showActiveTasks,
    showAllTasks,
    showCompletedTasks
};