import React from 'react';
import {connect} from 'react-redux';
import {addTask} from '../../actions';
import { Container, InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import nextId from "react-id-generator";

const AddTask = ({addTask}) => {
    const htmlId = nextId();
    return (
        <Container>
            <h1>Task</h1>
            <InputGroup>
                <Input className="discription-task"/>
                <InputGroupAddon addonType="append">
                    <Button onClick={() => addTask(htmlId)} color="success">Add task!</Button>
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