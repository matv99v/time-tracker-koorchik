import Timer from '../../src/Timer';

export function dumpTask(taskData) {
    const timer = new Timer({ state: taskData.timerState });

    return {
        id:        taskData._id,
        name:      taskData.name,
        createdAt: taskData.createdAt,
        updatedAt: taskData.updatedAt,
        spent:     timer.getSpentTime(),
        status:    timer.isActive() ? 'ACTIVE' : 'INACTIVE'
    };
}
