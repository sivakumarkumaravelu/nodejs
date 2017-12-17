//Implementing a One time event

const events = require('events'),
      emitter = new events.EventEmitter();

function listener(){
    console.log('one Timer');
    emitter.removeListener('oneTimer',listener);
}

emitter.on('oneTimer', listener);
emitter.emit('oneTimer');
emitter.emit('oneTimer');

//Implementing a one-time event with Emitter.once

