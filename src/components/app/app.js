import React from 'react';
import AddTask from '../add-task';
import Filter from '../filter';
import ListTasks from '../list-tasks';

const App = () => {
    return (
        <div className="app">
            <AddTask/>
            <ListTasks/>
            <Filter/>
        </div>
    )
}

export default App; 