import React from 'react';
import {connect} from 'react-redux';
import {Container} from 'reactstrap';
import {changeActivity, removeTask} from '../../actions';
import Task from '../task';

const ListTasks = ({items, changeActivity, removeTask, itemsFilter, filter}) => {
    let countCompletedTask = 0;
    items.map( item =>  item.completed === true ? countCompletedTask += 1 : countCompletedTask += 0 );
    let count = items.length;
    let filterState = 'ALL';
    if (filter === 'ACTIVE') {
        filterState = 'ACTIVE';
        countCompletedTask = count - countCompletedTask;
        items = itemsFilter;
    } else if (filter === 'COMPLETED') {
        filterState = 'COMPLETED';
        items = itemsFilter;
    } 

    return (
        <Container>
            <h1>{filterState} {countCompletedTask}/{count}</h1>
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

const mapStateToProps = ({items, itemsFilter, filter}) => {
    return {
        items,
        itemsFilter,
        filter
    }
};

const mapDispatchToProps = {
    changeActivity,
    removeTask
};



export default connect(mapStateToProps, mapDispatchToProps)(ListTasks);