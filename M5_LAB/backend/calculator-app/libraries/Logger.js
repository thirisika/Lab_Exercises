// jo: include the caller id in the constructor, that way every instance of the logger can be used independently

class Logger {

    constructor(caller) {
        this.callerId = caller;
    }

    log(message, result) {
        console.log(`[Caller ID: ${this.callerId}] Message: ${message} | Result: ${result}`);
    }
}

module.exports = Logger;