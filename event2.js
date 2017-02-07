var events = require('events');
var eventEmitter = new events.EventEmitter();

var listener1 = function () {
    console.log('listener 1 executed.');
}

var listener2 = function () {
    console.log('listener 2 executed.');
}

eventEmitter.on('newListener', function (event, listener) {
    console.log("new listener added to '" + event + "': " + listener.toString());
})

eventEmitter.on('removeListener', function (event, listener) {
    console.log("listener removed from '" + event + "': " + listener.toString());
})

eventEmitter.addListener('connection', listener1);
eventEmitter.on('connection', listener2);

var eventListeners = events.EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + ' listener(s) total.');

eventEmitter.emit('connection');

eventEmitter.removeListener('connection', listener1);
console.log('remove listener 1');

eventEmitter.emit('connection');

eventListeners = events.EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + " listerner(s) total");

console.log('process over.');