var dirWalker = require('./dirWalker');  
var fs = require('fs');  
  
function handleFile(path, floor) {  
    var blankStr = '';  
    for (var i = 0; i < floor; i++) {  
        blankStr += '    ';  
    }  
  
    fs.stat(path, function(err1, stats) {  
        if (err1) {  
            console.log('stat error');  
        } else {  
            if (stats.isDirectory()) {  
                console.log('+' + blankStr + path);  
            } else {  
                console.log('-' + blankStr + path);  
            }  
        }  
    })  
  
  
}  
  
dirWalker.walk('C:/Users/AIMM/Desktop/LearnJavaScript/Nature-in-code', 0, handleFile);  