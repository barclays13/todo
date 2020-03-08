import React from 'react';
import {connect} from 'react-redux';
import {addTask} from '../../actions';
import { Container, InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

    const AddTask = ({addTask}) => {
    return (
        <Container>
            <h1>Task</h1>
            <InputGroup>
                <Input className="discription-task"/>
                <InputGroupAddon addonType="append">
                    <Button onClick={() => addTask()} color="success">Add task!</Button>
                </InputGroupAddon>
            </InputGroup>
        </Container>
    );
};
const mapStateToProps = ({count}) => {
    return {
        count
    }
};
const mapDispatchToProps = {
    addTask
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);