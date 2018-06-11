"use strict";
exports.__esModule = true;
var Greeting = /** @class */ (function () {
    function Greeting(name) {
        this.name = name;
        console.log("Hello " + name);
    }
    return Greeting;
}());
exports.Greeting = Greeting;
var XmasGreeting = /** @class */ (function () {
    function XmasGreeting(name) {
        this.name = name;
        console.log("Merry Xmas " + name);
    }
    return XmasGreeting;
}());
exports.XmasGreeting = XmasGreeting;
