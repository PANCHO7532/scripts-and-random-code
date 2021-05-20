/*
* XOR Decodification/Codification concept
* Copyright (c) PANCHO7532 - P7COMunications LLC
*/
const fs = require('fs');
const xorValues; //be sure to redeclare this variable with a string or array of chars that would be used as a key

function xorCrypto(file, xorarr) {
    var deobfs_val = "";
    for(let a = 0, b = 0; a < file.length; a++, b++) {
        if(b >= xorarr.length) {b = 0}
        deobfs_val += String.fromCharCode(file.charCodeAt(a) ^ xorarr[b].charCodeAt(0));
    }
    return deobfs_val;
}
var a = xorCrypto(fs.readFileSync("filetobeused.dat").toString(), xorValues);
console.log(a)
