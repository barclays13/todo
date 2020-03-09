import React from 'react';
import {connect} from 'react-redux';
import {Container} from 'reactstrap';
import {changeActivity, removeTask} from '../../actions';
import Task from '../task';

const ListTasks = ({count, items, changeActivity, removeTask, itemsFilter, filter}) => {
    let countCompletedTask = 0;
    items.map( item =>  item.completed === true ? countCompletedTask += 1 : countCompletedTask += 0 );
    if (filter === 'ACTIVE') {
        items = itemsFilter;
    } else if (filter === 'COMPLETED') {
        items = itemsFilter;
    } 

    return (
        <Container>
            <h1>Completed {countCompletedTask}/{count}</h1>
            <div>
                {
                    items.map( taskItem => {
                        return <Task
                            key={taskItem.id}
                            taskItem={taskItem}
                            onChangeActivity = {() => changeActivity(taskItem.id)}
                            onRemoveTask = {() => removeTask(taskItem.id)}/>
                    })
                }
            </div>

        </Container>
    );
};

const mapStateToProps = ({items, count, itemsFilter, filter}) => {
    return {
        items,
        count,
        itemsFilter,
        filter
    }
};

const mapDispatchToProps = {
    changeActivity,
    removeTask
};



export default connect(mapStateToProps, mapDispatchToProps)(ListTasks);