
module.exports =
{
        person: function(name, age)
        {
            this.name = name;
            this.age = age;

            return this;
        },

        setAge: function(person, age)
        {
            person.age = age;
        },

        setName: function(person, name)
        {
            person.name = name;
        },

        getInfo: function(person)
        {
            return person.name + ", " + person.age;
        }
};