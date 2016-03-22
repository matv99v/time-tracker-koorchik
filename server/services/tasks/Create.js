import {validate} from '../validationUtils';
import {dumpTask} from '../dumpUtils';
import Base from '../Base';
import Timer from '../../../src/Timer';

export default class Create extends Base {
    validate(data) {
        return validate( {
            data: ['required', {'nested_object': {
                name: [ 'required', {'min_length': 3} ]
            }}]
        }, data );
    }

    execute({data}) {
        const taskData = {
            name:       data.name,
            createdAt:  new Date(),
            updatedAt:  new Date(),
            timerState: new Timer().dumpState()
        };

        return this.db.tasks.saveAsync(taskData).then( dumpTask );
    }
}
