'use strict';

export default class Timer {
    constructor( { state = {} } = {} ) {
        this._spent = state.spent || 0;
        this._isActive = state.isActive || false;
        this._lastSessionStartetAt = state.lastSessionStartetAt || 0;
    }

    start() {
        this._isActive  = true;
        this._lastSessionStartetAt = new Date().getTime();
    }

    stop() {
        if ( !this._isActive ) return;

        this._isActive = false;
        this._spent += new Date().getTime() - this._lastSessionStartetAt;
        this._lastSessionStartetAt = 0;
    }

    getSpentTime() {
        if (!this._isActive) return this._spent;
        return this._spent + (new Date().getTime() - this._lastSessionStartetAt);
    }

    isActive() {
        return this._isActive;
    }

    clear() {
        this._lastSessionStartetAt = new Date().getTime();
        this._spent = 0;
    }

    dumpState() {
        return {
            spent: this._spent,
            isActive: this._isActive,
            lastSessionStartetAt: this._lastSessionStartetAt
        };
    }
}

