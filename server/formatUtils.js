const Timer = require('../src/Timer');

module.exports = {
    dumpTask(taskData) {
        const timer = new Timer({state: taskData.timerState});

        return {
            id:        taskData._id,
            name:      taskData.name,
            spent:     timer.getSpentTime(),
            createdAt: taskData.createdAt,
            updatedAt: taskData.updatedAt,
            status:    timer.isActive() ? 'ACTIVE' : 'INACTIVE'
        };
    }
};
