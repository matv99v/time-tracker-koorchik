import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Input from 'react-bootstrap/lib/Input';


export default class NewTaskForm extends React.Component {
    handleButtonClick = () => {
        const taskName = this.refs.taskNameInput.value;
        if (!taskName) return;

        this.props.onSubmit(taskName);
    };

    render() {
        return (
            <div>
                <input ref='taskNameInput' />
                <Button bsStyle="primary" onClick={this.handleButtonClick}>
                    Add new task
                </Button>
            </div>
        );
    }
}
