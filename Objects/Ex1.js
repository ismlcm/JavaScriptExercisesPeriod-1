var obj = {
	name: "Ismail",
	birthday: "12-09-1985",
	hobby: "Programming",
	email: "ismlipad@gmail.com"
};

function loopObjPropeties( obj )
{
	for( var key in obj )
	{
		console.log( key + ": " + obj[ key ] );
	}

	console.log( ":::::::::::::::::::::::::::::" );
}

loopObjPropeties( obj );

delete obj.birthday;

loopObjPropeties( obj );

console.log( obj.hasOwnProperty( "birthday" ) ); // false because property is deleted.