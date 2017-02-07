var events = require('events');
var emitter = new events.EventEmitter();
var emitter2 = new events.EventEmitter();

emitter.on('someEvent', function(arg1, arg2) {
    console.log('listener1', arg1, arg2);
})

emitter.once('someEvent', function(arg1, arg2) {
    console.log('listener2', arg1, arg2);
})

emitter.emit('someEvent', 'arg1 value', 'arg2 value');
emitter2.emit('someEvent', 'arg1 value', 'arg2 value');