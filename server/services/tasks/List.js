import {validate} from '../validationUtils';
import {dumpTask} from '../dumpUtils';
import Base from '../Base';

export default class List extends Base {
    validate(data) {
        return validate( {}, data );
    }

    execute() {
        return this.db.tasks.findAsync().then( tasks => tasks.map(dumpTask) );
    }
}

module.exports = List;