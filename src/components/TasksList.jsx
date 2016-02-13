import React from 'react';
import Button from 'react-bootstrap/lib/Button';

export default class TasksList extends React.Component {
    handleStopStartClick = (task) => {
        if (task.isActive) {
            this.props.onTaskStop(task);
        } else {
            this.props.onTaskStart(task);
        }
    };

    render() {
        return (
            <ul>
                {this.props.tasks.map( task =>
                    <li>
                        {task.name}
                        <Button onClick={this.handleStopStartClick.bind(this, task)}>
                            {task.isActive ? 'Stop' : 'Start'}
                        </Button>
                    </li>
                )}
            </ul>
        );
    }
}
