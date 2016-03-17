'use strict';

const express     = require('express');
const bodyParser  = require('body-parser');
const mongojs     = require('mongojs');
const formatUtils = require('./formatUtils');
const Promise     = require('bluebird');

Promise.promisifyAll([
    require('mongojs/lib/collection'),
    require('mongojs/lib/database'),
    require('mongojs/lib/cursor')
]);


const LIVR = require('livr');
LIVR.Validator.defaultAutoTrim(true);

const app = express();
app.use( bodyParser.json() );

const db = mongojs('timer-tracker', ['tasks']);

app.get('/api/v1/tasks', (req, res) => {
    db.tasks.findAsync().then(tasks => {
        res.json({
            status: 1,
            data: tasks.map(formatUtils.dumpTask)
        });
    }).catch(console.error);
});

app.post('/api/v1/tasks', (req, res) => {
    const data = req.body;

    const validator = new LIVR.Validator({
        data: ['required', {'nested_object': {
            name: [ 'required', {'min_length': 3} ]
        }}]
    });

    const validData = validator.validate(data);

    if (validData) {
        const taskData = {
            name: validData.data.name,
            spent: 0,
            createdAt: new Date(),
            updatedAt: new Date(),
            status: 'INACTIVE'
        };

        db.tasks.saveAsync(taskData).then( savedTask => {
            res.json({
                status: 1,
                data: formatUtils.dumpTask(savedTask)
            });
        }).catch(console.error);
    } else {
        res.json({
            status: 0,
            error: validator.getErrors()
        });
    }
});

app.put('/api/v1/tasks/:id/start', (req, res) => {
    const id = req.params.id;
    const taskData = loadTask(id);
    taskData.status = 'ACTIVE';
    save(id, taskData);
});

app.put('/api/v1/tasks/:id/stop', (req, res) => {
    const id = req.params.id;

    const taskData = loadTask(id);

    const timer = new Timer({
        startTime: taskData.startTime,
        status: taskData.status,
        spent: taskData.spent
    });

    timer.stop();

    saveTask({
        ...taskData,
        spent: timer.getSpentTime(),
        status: 'INACTIVE'
    });
});

app.put('/api/v1/tasks/:id/clear', (req, res) => {
    const id = req.params.id;

    saveTask({
        ...taskData,
        spent: 0
    });
});


app.delete('/api/v1/tasks/:id', (req, res) => {
    const id = req.params.id;

    // TODO validate and handle wrong ids

    db.tasks.removeAsync({_id: mongojs.ObjectId(id)}).then( () => {
        res.json({
            status: 1
        });
    });
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
