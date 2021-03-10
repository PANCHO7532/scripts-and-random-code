/*
* Quadratic function example by PANCHO7532
* Some kind of example for calculate some basic values of a cuadratic function
* Copyright P7COMunications LLC (c) 2021
*/
const process = require('process');
console.clear();
var a = Number(process.argv[2]);
var b = Number(process.argv[3]);
var c = Number(process.argv[4]); 
var x1x2 = [];
var xvyv = [];
//x1,x2
var sqrt_res = Math.sqrt(Math.pow(b, 2) - (4 * a * c));
if(isNaN(sqrt_res)) {
    x1x2[0] = "Imaginary";
    x1x2[1] = "Imaginary";
} else {
    x1x2[0] = (-b + sqrt_res) / (2 * a);
    x1x2[1] = (-b - sqrt_res) / (2 * a);
}
//xyyv
xvyv[0] = -b / (2 * a);
xvyv[1] = (a * Math.pow(xvyv[0], 2)) + (b * xvyv[0]) + c;
if(x1x2[0] && x1x2[1] == "Imaginary") {
    console.log("x1, x2: (" + x1x2[0] + "," + x1x2[1] + ") ||| Bad sqrt: " + (Math.pow(b, 2) - (4 * a * c)));
} else {
    console.log("x1, x2: (" + x1x2[0] + "," + x1x2[1] + ")");
}
console.log("xv, yv: (" + xvyv[0] + "," + xvyv[1] + ")");
console.log("Interception: " + c);
console.log("Symmetry Axis: " + xvyv[0]);
if(a < 0) {
    console.log("Co-domain: R \u{2264} " + xvyv[1]);
} else {
    console.log("Co-domain: R \u{2265} " + xvyv[1]);
}