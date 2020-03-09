import React from 'react';
import {connect} from 'react-redux';
import {showAllTasks, showActiveTasks, showCompletedTasks} from '../../actions';
import {Container, ButtonGroup, Button} from 'reactstrap';


const Filter = ({showActiveTasks, showAllTasks, showCompletedTasks}) => {
    return (
        <Container>
            <ButtonGroup>
                <Button onClick={() => showAllTasks()} >All</Button>
                <Button onClick={() => showActiveTasks()}>Active</Button>
                <Button onClick={() => showCompletedTasks()} >Completed</Button>
            </ButtonGroup>
        </Container>
    );
};

const mapStateToProps = () => {
    return{}
};

const mapDispatchToProps = {
    showActiveTasks,
    showAllTasks,
    showCompletedTasks
};



export default connect(mapStateToProps, mapDispatchToProps)(Filter);