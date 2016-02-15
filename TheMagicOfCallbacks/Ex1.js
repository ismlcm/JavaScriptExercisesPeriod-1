var names = ['Lars', 'Jan', 'Peter', 'Bo', 'Iso', 'Maz', 'Ib'];


// 1.a
function checkname(name)
{
    return name.length <= 3;
}

console.log( names.filter( checkname ) );

// 1.b
function upperCaseName(name)
{
    return name.toUpperCase();
}

console.log( names.map(upperCaseName) );