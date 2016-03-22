'use strict';

// DB instance
import Promise from 'bluebird';
const mongojs     = require('mongojs');
Promise.promisifyAll([
    require('mongojs/lib/collection'),
    require('mongojs/lib/database'),
    require('mongojs/lib/cursor')
]);

const db = mongojs('timer-tracker', ['tasks']);

// Services
import TasksCreateService  from './services/tasks/Create';
import TasksCommandService from './services/tasks/Command';
import TasksListService    from './services/tasks/List';
import TasksDeleteService  from './services/tasks/Delete';

// Web app
import express    from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use( bodyParser.json() );

// Routes
app.get('/api/v1/tasks', (req, res) => {
    sendResult( new TasksListService({db}).run({}), res );
});

app.post('/api/v1/tasks', (req, res) => {
    const params = req.body;

    sendResult( new TasksCreateService({db}).run(params), res );
});

app.put('/api/v1/tasks/:id/:command', (req, res) => {
    const id = req.params.id;
    const command = req.params.command;

    sendResult( new TasksCommandService({db}).run({id, command}), res );
});

app.delete('/api/v1/tasks/:id', (req, res) => {
    const id = req.params.id;

    sendResult( new TasksDeleteService({db}).run({id}), res );
});

function sendResult(resultPromise, response) {
    resultPromise.then(data => {
        response.json({ status: 1, data });
    }).catch( error => {
        console.log(error);
        response.json({ status: 0, error });
    });
}

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
