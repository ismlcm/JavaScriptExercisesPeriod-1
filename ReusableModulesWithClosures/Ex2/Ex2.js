
var p = require('./person');

var person = p;

var ismail = person.person("Ismail", 30);

person.setAge(ismail, 20);
person.setName(ismail, "Mazlum");

console.log( person.getInfo(ismail) );