1. What will print out when the following code is run?

    var globalVar = 77;

    function scopeTest() {
        var localVar = 88;
    }

    console.log(localVar);
a. 77
b. 88
c. null
d. undefined

2. Variables declared using const can be reassigned
a. true
b. false

3. When a function calls itself, it is known as ........
a. recursion
b. looping
c. higher-order function

4. What will print out when the following code is run?

    function meal(animal) {
        animal.food = animal.food + 10;
    }

    var dog = {
        food: 10
    };
    meal(dog);
    meal(dog);

    console.log(dog.food);

    a.10
    b.20
    c. 30
    d. 40

5. What will print out when the following code is run?

    function two() {
        return 2;
    }

    function one() {
        return 1;
    }

    function calculate(initialValue, incrementValue) {
        return initialValue() + incrementValue() + incrementValue();
    }

    console.log(calculate(two, one));

a.1
    b.2
    c. 3
    d. 4

6. 