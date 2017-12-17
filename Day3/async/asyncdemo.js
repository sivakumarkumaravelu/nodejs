var async = require("async");
//async.parallel
//async.auto
async.series({
    numbers: (callback) => {
        setTimeout(() => {
            callback(null, [1, 2, 3]);
        }, 1500);
    },
    strings: (callback) => {
        setTimeout(() => {
            callback(null, ["a", "b", "c"]);
        }, 2000);
    }
},
(err, results) => {
        if (err) console.log(err);
        console.log(results);
}); 
//callback will be executed in main thread and it is blocking.