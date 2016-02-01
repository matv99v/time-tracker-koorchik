'use strict';

class Timer {
    constructor() {
        this.spent = 0;
        this.isActive = false;
        this.lastSessionStartetAt = 0;
    }

    start() {
        this.isActive  = true;
        this.lastSessionStartetAt = new Date().getTime();
    }

    stop() {
        if ( !this.isActive ) return;

        this.isActive = false;
        this.spent += new Date().getTime() - this.lastSessionStartetAt;
        this.lastSessionStartetAt = 0;
    }

    getSpentTime() {
        if (!this.isActive) return this.spent;
        return this.spent + (new Date().getTime() - this.lastSessionStartetAt);
    }

    clear() {
        this.lastSessionStartetAt = new Date().getTime();
        this.spent = 0;
    }
}

module.exports = Timer;
