export default class Base {
    constructor({db}) {
        this.db = db
    }

    run(params) {
        return this.validate(params).then((validData) => {
            return this.execute(validData);
        });
    }
}

