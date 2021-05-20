/*
* /=================================================\
* | XOR Decoder                                     |
* | Copyright (c) PANCHO7532 - P7COMunications LLC  |
* \=================================================/
* This utility calculates XOR keys/values by doing a comparison of values
* Most repeated sequence is probably the correct XOR key/sequence required for decrypt the file.
* Of course, this script assumes that the data is UTF-8 content, may or may not work with complex binary data.
* If it's a binary, it will automatically interpreted as UTF-8 content according to Javascript.
*/
const fs = require('fs');
const file1 = fs.readFileSync("xorcrypted.dat").toString(); //original file
const file2 = fs.readFileSync("xordecoded.dat").toString(); //decoded file
var arr = [];
for(let c = 0; c < file2.length; c++) {
    for(let d = 0;; d++) {
        if((file1.charCodeAt(c) ^ d) == file2.charCodeAt(c)) {
            arr.push(d);
            break;
        }
    }
}
console.log(arr); //array of values
for(let c = 0; c < arr.length; c++) {
    process.stdout.write(String.fromCharCode(arr[c]) + "");
}
console.log();