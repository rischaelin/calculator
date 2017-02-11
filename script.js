"use strict";

var age = 25;
var ageDifference = "7";


console.log(age + ageDifference);

var a = 6;
var b = 5;
var c = a + b;

console.log(c)



var run = function run(callback) {
    console.log("run() wurde ausgeführt");
    callback();

}

var f = function () {
    console.log("f() wurde ausgeführt");
}
run(f);

setTimeout(function () {
    console.log("funtion() wurde ausgeführt");
}, 2000)

