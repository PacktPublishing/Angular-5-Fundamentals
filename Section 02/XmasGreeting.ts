module Greetings {
	export class Greeting {
		constructor(public name: string) {
			console.log(`Hello ${name}`);
		}
	}
	export class XmasGreeting {
		constructor(public name: string) {
			console.log(`Merry Xmas ${name}`);
		}
	}
}

import XmasGreeting = Greetings.XmasGreeting;
var xmasGreeting = new XmasGreeting('Joe');

// <reference path="XmasGreeting.ts" />