//using the ECMA Script module system, we can import the sillyname package like this:

import generateName from "sillyname";
//var generateName = require('sillyname');
var sillyName = generateName();
console.log(`My name is ${sillyName}`);

//using the ECMA Script module system, we can import the superheroes package like this:

import { randomSuperhero } from "superheroes";
//const superheroes = require('superheroes');
const name = randomSuperhero();
console.log(`I am ${name}!`);
