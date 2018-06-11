var Greetings;
(function (Greetings) {
    var Greeting = /** @class */ (function () {
        function Greeting(name) {
            this.name = name;
            console.log("Hello " + name);
        }
        return Greeting;
    }());
    Greetings.Greeting = Greeting;
    var XmasGreeting = /** @class */ (function () {
        function XmasGreeting(name) {
            this.name = name;
            console.log("Merry Xmas " + name);
        }
        return XmasGreeting;
    }());
    Greetings.XmasGreeting = XmasGreeting;
})(Greetings || (Greetings = {}));
var XmasGreeting = Greetings.XmasGreeting;
var xmasGreeting = new XmasGreeting('Joe');
// <reference path="XmasGreeting.ts" />
