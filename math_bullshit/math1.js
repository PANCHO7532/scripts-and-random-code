const process = require("process");
let a = process.argv[2], b = process.argv[3], c = process.argv[4], d = process.argv[5];

if(a < b) {
    console.log("cond1");
    console.log(`${a} + ${c} < ${b} + ${c}`);
    console.log(`result: ${a + c} < ${b + c}`);
}
if((a < b) && (c < d)) {
    console.log("cond2");
    console.log(`${a} + ${c} < ${b} + ${d}`);
    console.log(`result: ${a + c} < ${b + d}`);
}
if((a < b) && (c > 0)) {
    console.log("cond3");
    console.log(`${a} * ${c} < ${b} * ${c}`);
    console.log(`result: ${a * c} < ${b * c}`);
}
if((a < b) && (c < 0)) {
    console.log("cond4");
    console.log(`${a} * ${c} > ${b} * ${c}`);
    console.log(`result: ${a * c} > ${b * c}`);
}
//wut
if(0 < a < b) {
    console.log("cond5");
    console.log(`1 / ${a} > 1 / ${b}`);
    console.log(`result: ${1 / a} > ${1 / b}`);
}