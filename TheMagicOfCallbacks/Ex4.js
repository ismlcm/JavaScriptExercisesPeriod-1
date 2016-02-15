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

    return sumArray;
}

handleNumArrays(a, b, function(res){
    console.log(res.join());
});

