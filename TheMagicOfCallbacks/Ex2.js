var names = ['Lars', 'Jan', 'Peter', 'Bo', 'Iso', 'Maz', 'Ib'];

function checkName(name)
{
    if( name.length <= 3 )
    {
        return name;
    }
}

function upperCasename(name)
{
    return name.toUpperCase();
}

function myFilter(array, callback)
{
    var filteredArray = [];

    for(var i = 0; i < array.length; i++)
    {
        if(callback(array[i]))
        {
            filteredArray.push(callback(array[i]));
        }
    }

    return filteredArray;
}

function myMap(array, callback)
{
    var filteredArray = [];

    for(var i = 0; i < array.length; i++)
    {
        if(callback(array[i]))
        {
            filteredArray.push(callback(array[i]));
        }
    }

    return filteredArray;
}


// PRINT TO CONSOLE

console.log( myFilter(names, checkName) );
console.log( myFilter(names, upperCasename) );

console.log( myMap(names, checkName) );
console.log( myMap(names, upperCasename) );