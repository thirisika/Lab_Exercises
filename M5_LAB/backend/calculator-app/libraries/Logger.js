class Logger {
    log(callerId, message, result) {
        console.log(`[Caller ID: ${callerId}] Message: ${message} | Result: ${result}`);
    }
}

module.exports = Logger;