'use strict';

const validators = require('../src/validators');

const assert   = require('chai').assert;
const FIXTURES = require('./fixtures.json');

function assertSubhash(gotHash, expectedHash) {
    for (const field in expectedHash) {
        const msg = `Error for [${field}] should be [${expectedHash[field]}]!`;
        assert.equal( (gotHash[field] || ''), expectedHash[field], msg );
    }
}

suite('Validate registration data');

test('Test registration data', () => {
    FIXTURES.forEach(function(data) {
        const errors = validators.validateRegistrationData(data.inputs);
        assertSubhash(errors || {}, data.errors);
    });
});
