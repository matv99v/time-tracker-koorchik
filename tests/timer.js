'use strict';

const Timer  = require('../src/Timer');
const assert = require('chai').assert;


suite('Timer');

test('Test timer object API', () => {
    const timer = new Timer();

    assert.instanceOf(timer, Timer);
    assert.isFunction(timer.start, 'timer should have method [start]');
    assert.isFunction(timer.stop, 'timer should have method [stop]');
    assert.isFunction(timer.clear, 'timer should have method [clear]');
    assert.isFunction(timer.getSpentTime, 'timer should have method [getSpentTime]');
});


test('Check timer measurements', (done) => {
    const timer = new Timer();

    assert.equal(timer.getSpentTime(), 0);
    timer.start();

    setTimeout(() => {
        assert.closeTo(timer.getSpentTime(), 500, 50);
    }, 500);

    setTimeout(() => {
        timer.stop();
        assert.closeTo(timer.getSpentTime(), 1000, 50);
    }, 1000)

    setTimeout(() => {
        assert.closeTo(timer.getSpentTime(), 1000, 50);
        timer.start();
    }, 1500);

    setTimeout(() => {
        assert.closeTo(timer.getSpentTime(), 1500, 50);

        timer.clear();
        assert.equal(timer.getSpentTime(), 0);
        done();
    }, 2000);
});