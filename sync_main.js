var fs = require('fs');

var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log('程序执行结束');

data = fs.readFile('input.txt', function (err, data) {
    if (err) {
        return consolo.error(err);
    }
    else {
        console.log(data.toString());
    }
})
console.log("process over!");