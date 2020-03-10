import React from 'react';
import AddTask from '../add-task';
import Filter from '../filter';
import ListTasks from '../list-tasks';

const App = () => {
    return (
        <div>
            <AddTask/>
            <Filter/>
            <ListTasks/>
        </div>
    )
}

export default App; 