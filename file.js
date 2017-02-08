var fs = require('fs');
console.log('prepare to open a file.');
fs.stat('input.txt', function (err, stats) {
    if (err) {
        return console.err(err);
    }

    console.log(stats);
    console.log("read state of file done.");
    console.log("Is file ? " + stats.isFile());
    console.log("Is directory ? " + stats.isDirectory());
})