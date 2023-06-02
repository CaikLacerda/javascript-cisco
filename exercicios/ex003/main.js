"use strict";

console.log("///////////// ex 01 /////////////");

function greeting() {
    console.log("Hello");
    console.log("World");
}

console.log("let´s begin");
greeting();
console.log("and again");
greeting();
console.log("and once more");
greeting();

console.log("///////////// ex 02 /////////////");

var globalGreeting = "Good ";

function testFunction() {
    var localGreeting = "Morning";
    console.log("function: ");
    console.log(globalGreeting);
    console.log(localGreeting);
}

testFunction();

console.log("main program:");
console.log(globalGreeting);
console.log(localGreeting);