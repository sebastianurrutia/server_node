'use strict'

var buf = new Buffer(100),
    buf2 = new Buffer(26),
    str = '\u00bd + \00bc = \u00be';
    

buf.write('abcd', 0, 4, 'ascii');

console.log(
    buf,
    buf.toString('ascii'),
    str,
    str.length + 'caracteres',
    Buffer.byteLength(str, 'utf8') +'bytes usados',
    buf2.length

);

for (var i = 0; i < buf2.length; i++){
    // 97 en ASCII es a
    buf2[i] = i + 97;
    
}
console.log(buf2.toString('ascii'));