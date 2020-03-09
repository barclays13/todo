import React from 'react';
import {Card, CardBody, CardTitle, CardText, Button, Label, Input   } from 'reactstrap';
import './task.css';

const Task = ({taskItem, onChangeActivity, onRemoveTask}) => {
    let newClassItem = '';
    if (taskItem.completed) {
        newClassItem = 'completedTask';
    }
    return (
            <Card className = {newClassItem}>
                <Label check>
                    <CardBody>
                            <Input className="task-check" onClick={() => onChangeActivity()} type="checkbox" />
                            <CardTitle>
                                <Button onClick={() => onRemoveTask()} close/>
                            </CardTitle>
                            <CardText className="task-text">{taskItem.text}</CardText>
                    </CardBody>
                </Label>
            </Card>
    );
};



export default Task;