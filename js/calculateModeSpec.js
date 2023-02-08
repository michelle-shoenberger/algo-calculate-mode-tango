// Write your own unit tests here!

let mode = require("./calculateMode");

console.log(mode.calculateMode(["who", "what", "where", "why", "who"])) //['who']
console.log(mode.calculateMode([1.5, -1, 1, 1.5])) // [1.5]
console.log(mode.calculateMode([2, 3, 1, -1, 1, 1.5, -1])) // [1, -1]