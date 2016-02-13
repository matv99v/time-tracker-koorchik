import React from 'react';
import Button from 'react-bootstrap/lib/Button';

import NewTaskForm from './NewTaskForm.jsx';
import TasksList from './TasksList.jsx';

export default class App extends React.Component {
    state = {
        tasks: [],
        activeTaskId: null
    };

    handleTaskSubmit = (taskName) => {
        const {tasks} = this.state;

        tasks.push({
            id: new Date().getTime(),
            name: taskName,
            isActive: false
        });

        this.setState({tasks});
    };

    handleTaskStart = ({id}) => {
        const taskToStart = this.state.tasks.find( task => task.id === id );
        taskToStart.isActive = true;
        this.setState({tasks: this.state.tasks});
    };

    handleTaskStop = ({id}) => {
        const taskToStop = this.state.tasks.find( task => task.id === id );
        taskToStop.isActive = false;
        this.setState({tasks: this.state.tasks});
    };

    render() {
        return (
            <div>
                <NewTaskForm onSubmit={this.handleTaskSubmit}/>
                <TasksList
                    tasks={this.state.tasks}
                    onTaskStart={this.handleTaskStart}
                    onTaskStop={this.handleTaskStop}
                />
            </div>
        );
    }
}

