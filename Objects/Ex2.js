
function Person(firstName, lastName, age)
{
    this.firstname = firstName;
    this.lastname = lastName;
    this.age = age;
}

function loopPersonPropeties(person)
{
    for( var key in person )
    {
        console.log( key + ": " + person[key] );
    }

    console.log(":::::::::::::::::::::::::::::");
}

var ismail = new Person("Ismail", "Cam", 30);

loopPersonPropeties(ismail);