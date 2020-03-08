import React from 'react';
import {connect} from 'react-redux';
import {Container} from 'reactstrap';
import {changeActivity, removeTask} from '../../actions';
import Task from '../task';
import './list-task.css';

const ListTasks = ({count, items, changeActivity, removeTask, completed}) => {
;
    return (
        <Container>
            <h1>Number of tasks : {count}</h1>
            <div>
                {
                    items.map( taskItem => {
                        return <Task
                            taskItem={taskItem}
                            key={taskItem}
                            completed={completed}
                            onChangeActivity = {() => changeActivity()}
                            onRemoveTask = {() => removeTask(taskItem)}/>
                    })
                }
            </div>

        </Container>
    );
};

const mapStateToProps = ({items, count, completed}) => {
    return {
        items,
        count, 
        completed
    }
};

const mapDispatchToProps = {
    changeActivity,
    removeTask
};



export default connect(mapStateToProps, mapDispatchToProps)(ListTasks);