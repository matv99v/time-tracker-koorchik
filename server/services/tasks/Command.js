import {validate} from '../validationUtils';
import {dumpTask} from '../dumpUtils';
import Base from '../Base';
import Timer from '../../../src/Timer';
import mongojs from 'mongojs';

export default class Command extends Base {
    validate(data) {
        return validate( {
            id: 'required',
            command: ['required', {'one_of': ['start', 'stop', 'clear'] }]
        }, data );
    }

    execute({id, command}) {
        return this.db.tasks.findAsync({_id: mongojs.ObjectId(id) }).then( taskData => {
            const timer = new Timer({state: taskData.timerState});
            timer[command]();

            return this.db.findAndModifyAsync({
                query: {_id: mongojs.ObjectId(id) },
                update: { $set: {timerState: timer.dumpState() } }
            }).then(dumpTask);
        });
    }
}
