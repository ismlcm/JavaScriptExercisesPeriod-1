/************************************
 * Example 1
 *************************************/

function Person(firstname, lastname, age)
{
    // Get arguments and add to properties.
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.printFullName = function(){
        console.log( this.firstname + " " + this.lastname + " is " + this.age )
    };
}

var ismail = new Person("Ismail", "Cam", 30);
var mazlum = new Person("Mazlum", "Dogan Sert", 25);

// Print persons
ismail.printFullName();
mazlum.printFullName();


/************************************
 * Example 2
 *************************************/
var Car = {
    make: "BMW",
    model: "M5",
    printCar: function(){
        console.log(this.make + " " + this.model);
    }
};

Car.printCar();


/************************************
 * Example 3 --> call()
 *************************************/
function Product(name, price)
{
    this.name = name;
    this.price = price;
}

function Food(name, price)
{
    Product.call(this, name, price); // Product initializes the properties name and price to Food object.
    this.category = "Food";
}

var tomato = new Food("Cherry tomato", 20);

console.log(tomato);


/************************************
 * Example 3 --> apply()
 *************************************/
function Drink(name, price)
{
    Product.apply(this, [name, price]);
    this.category = "Drink";
}

var juice = new Drink('Apple juice', 20);

console.log(juice);


/************************************
 * Example 3 --> bind()
 *************************************/
name = "Lindevangkole"; // global value

var school = {
    name: "CPH Business",
    city: "Lyngby",
    getSchool: function(){
        return this.name;
    }
};

var schoolName = school.getSchool;
var boundSchoolName = schoolName.bind(school);

console.log( schoolName() );
console.log( boundSchoolName() );