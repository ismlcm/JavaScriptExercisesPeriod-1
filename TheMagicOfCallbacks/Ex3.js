var names = ['Lars', 'Jan', 'Peter', 'Bo', 'Iso', 'Maz', 'Ib'];

function upperCasename(name)
{
    return name.toUpperCase();
}

function checkName(name)
{
    if( name.length <= 3 )
    {
        return name;
    }
}

Array.prototype.myFilter = function myFilter(callback){

    var filteredArray = [];

    for(var i = 0; i < this.length; i++)
    {
        if(callback(this[i]))
        {
            filteredArray.push( callback(this[i]) );
        }
    }

    return filteredArray;

};

var newArray = names.myFilter(upperCasename);
var newArray2 = names.myFilter(checkName);

console.log(newArray);
console.log(newArray2);



