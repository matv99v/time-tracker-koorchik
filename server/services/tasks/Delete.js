import {validate} from '../validationUtils';
import {dumpTask} from '../dumpUtils';
import Base from '../Base';
import mongojs from 'mongojs';


export default class Delete extends Base {
    validate(data) {
        return validate({
            id: 'required'
        }, data );
    }

    execute({id}) {
        return this.db.tasks.removeAsync({_id: mongojs.ObjectId(id)}).then( () => {} );
    }
}
