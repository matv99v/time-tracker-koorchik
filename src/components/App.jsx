import React from 'react';
import Button from 'react-bootstrap/lib/Button';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <div>Do hometask</div>
                <Button bsStyle="primary">Start timer</Button>
            </div>
        );
    }
}

