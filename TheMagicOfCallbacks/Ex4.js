var a = [1,2,3];
var b = [1,2,3];

function handleNumArrays(na1, na2, callback)
{
    var sumArray = [];

    for(var i = 0; i < na1.length; i++)
    {
        var sum = na1[i] + na2[i];
        sumArray.push(sum);
    }

    return callback(sumArray);
}

function printSumArray(sumArray)
{
    console.log( sumArray.join() );
}

function calculateSumArray(sumArray)
{
    var sum = 0;

    for(var i = 0; i < sumArray.length; i++)
    {
        sum += sumArray[i];
    }

    console.log("TOTAL: " + sum);
}

function multipleSumArray(sumArray)
{
    for(var i = 0; i < sumArray.length; i++)
    {
        sumArray[i] *= 10;
    }

    console.log( "Multipled values: " + sumArray.join() );
}

handleNumArrays(a, b, printSumArray);
handleNumArrays(a, b, calculateSumArray);
handleNumArrays(a, b, multipleSumArray);

