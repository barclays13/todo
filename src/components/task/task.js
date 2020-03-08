import React from 'react';
import {Card, CardBody, CardTitle, CardText, Button, Label, Input   } from 'reactstrap';

const Task = ({taskItem, completed, onChangeActivity, onRemoveTask}) => {
    let newclass ='';

    if (completed) {
        console.log(completed);
        newclass += 'completed';
    }
    console.log(newclass);
    return (
            <Card id={newclass }>
                <Label check>
                    <CardBody>
                            <Input onClick={() => onChangeActivity()} type="checkbox" />
                            <CardTitle>
                                <Button onClick={() => onRemoveTask()} close/>
                            </CardTitle>
                            <CardText>{taskItem}</CardText>
                    </CardBody>
                </Label>
            </Card>
    );
};



export default Task;