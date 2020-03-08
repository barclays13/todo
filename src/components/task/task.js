import React from 'react';
import {Card, CardBody, CardTitle, CardText, Button, Label, Input   } from 'reactstrap';

const Task = ({taskItem, onChangeActivity, onRemoveTask}) => {
    return (
            <Card >
                <Label check>
                    <CardBody>
                            <Input onClick={() => onChangeActivity()} type="checkbox" />
                            <CardTitle>
                                <Button onClick={() => onRemoveTask()} close/>
                            </CardTitle>
                            <CardText>{taskItem.text}</CardText>
                    </CardBody>
                </Label>
            </Card>
    );
};



export default Task;