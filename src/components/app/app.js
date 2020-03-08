import React from 'react';
import AddTask from '../add-task';
import ListTasks from '../list-tasks';

const App = () => {
    return (
        <div className="app">
            <AddTask/>
            <ListTasks/>
        </div>
    )
}

export default App; 