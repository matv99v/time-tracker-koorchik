import LIVR from 'livr';
LIVR.Validator.defaultAutoTrim(true);

export function validate(rules, data) {
    const validator = new LIVR.Validator(rules);
    const validData = validator.validate(data);

    if (validData) {
        return Promise.resolve(validData);
    } else {
        return Promise.reject( validator.getErrors() );
    }
}


