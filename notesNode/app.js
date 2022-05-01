console.log("starting app...");

const fs = require('fs');
const os = require('os');
var user = os.userInfo();
// fs.appendFileSync('hello.txt', "Hello World!\n");
fs.appendFileSync('hello.txt', "Hello " + user.username + "!\n");