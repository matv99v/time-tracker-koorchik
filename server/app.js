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

app.delete('/api/v1/tasks/:id', (req, res) => {
    db.tasks.find((err, tasks) => {
        if (err) throw err;

        res.json({
            status: 1,
            data: tasks.map(formatUtils.dumpTask)
        });
    });
});



app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
