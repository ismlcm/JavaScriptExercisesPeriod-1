/*
    Hvis en variabel bliver instanseret men ikke er deklareret i en funktion, vil den (implicitly) automatisk blive deklareret i toppen af functionen.
    Dvs. variabel deklarationen er hoisted i toppen af funktionen.
    For at undgå kode forvirring anbefales det at man explicitly deklarere variablerne i toppen af funktionen / i scopen, for de deklareres alligevel.
 */
function print()
{
    //var x; deklarere x
    x = "Variable";
    console.log(x);
}

print();


/*
 Hvis en function variabel ikke er deklareret i en JS fil/i scopen2, vil den (implicitly) automatisk blive deklareret i toppen af klassen.
 Dvs. variabel deklarationen er hoisted i toppen af klassen.
 For at undgå kode forvirring anbefales det at man explicitly deklarere funktionen variablerne i toppen af JS filen / i scopen, for de deklareres alligevel.
 */
// var test;
function test(){ console.log("Functions") };

test();
