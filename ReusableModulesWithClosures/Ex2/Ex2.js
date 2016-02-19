
var p = require("./person");

// New persons
var ismail = new p.Person("Ismail", 30);
var mazlum = new p.Person("Mazlum", 25);

// Print persons
console.log("\n:::: Original ::::");
console.log( ismail.getInfo() );
console.log( mazlum.getInfo() );

// Change persons
ismail.setName("Ismail changed");
ismail.setAge(3);
mazlum.setName("Mazlum changed");
mazlum.setAge(2);

// Print persons again
console.log("\n:::: Changed ::::");
console.log( ismail.getInfo() );
console.log( mazlum.getInfo() );


