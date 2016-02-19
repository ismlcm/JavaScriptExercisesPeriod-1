module.exports =
{
    Person: function( name, age )
    {
        this.name = name;
        this.age = age;

        this.setAge = function( age )
        {
            this.age = age;
        };

        this.setName = function( name )
        {
            this.name = name;
        };

        this.getInfo = function()
        {
            return this.name + ", " + this.age;
        };
    }
};