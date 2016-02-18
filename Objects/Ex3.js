function Person( firstName, lastName, age )
{
	this.firstname = firstName;
	this.lastname = lastName;
	this.age = age;
}

function listAllProperties( o )
{
	var objectToInspect;
	var result = [];

	for( objectToInspect = o; objectToInspect !== null; objectToInspect = Object.getPrototypeOf( objectToInspect ) )
	{
		result = result.concat( Object.getOwnPropertyNames( objectToInspect ) );
	}

	return result;
}

var ismail = new Person( "Ismail", "Cam", 30 );

console.log( listAllProperties( ismail ) );

delete ismail.age;

console.log( ":::::::::::::::::::::::::" );

console.log( listAllProperties( ismail ) );