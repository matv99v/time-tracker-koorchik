module.exports = {
    dumpTask(taskData) {
        return {
            id:        taskData._id,
            name:      taskData.name,
            spent:     taskData.spent,
            createdAt: taskData.createdAt,
            updatedAt: taskData.updatedAt,
            status:    taskData.status
        };
    }
};
