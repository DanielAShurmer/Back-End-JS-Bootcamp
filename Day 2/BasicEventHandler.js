let events = require("events");
let eventEmitter = new events.EventEmitter();

let myFunct = function () {
    console.log("Do Something!");
}

eventEmitter.on('Bump', myFunct);

eventEmitter.emit('Bump');
eventEmitter.emit('Bump');
eventEmitter.emit('Bump');
eventEmitter.emit('Bump');
eventEmitter.emit('Bump');