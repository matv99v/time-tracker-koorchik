
module.exports = {
    dumpTask(taskData) {
        const timer = new Timer({
            startTime: taskData.startTime,
            status: taskData.status,
            spent: taskData.spent
        });

        return {
            id:        taskData._id,
            name:      taskData.name,
            spent:     timer.getSpentTime(),
            createdAt: taskData.createdAt,
            updatedAt: taskData.updatedAt,
            status:    taskData.status
        };
    }
};
