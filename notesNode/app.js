console.log("starting app...");

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
var user = os.userInfo();

// console.log(_.isString(1));
// console.log(_.isString("a"));

var arr = _.uniq([1, 1, 1, 2, 2, 3, 4, 5,5]);
console.log(arr);

// fs.appendFileSync('hello.txt', "Hello World!\n");
// fs.appendFileSync('hello.txt', "Hello " + user.username + "!\n");