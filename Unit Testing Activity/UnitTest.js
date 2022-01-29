function greet(name) {
    if(arguments.length == 0) {
        return("Hello there!")
    }
    if(arguments.length == 1) {
        if (arguments[0] == arguments[0].toUpperCase()) {
            return ("HELLO, " + name + "!");
           }
        else {
            return ("Hello, " + name + "!")
        }
    }
    else {
        let listOfPeople = "Hello";
        for (i=0; i < arguments.length; i++) {
            listOfPeople = (listOfPeople + ", " + arguments[i]);
        } 
        listOfPeople += ".";
        return listOfPeople;
    }
}

console.log(greet());
console.log(greet("Andrew"));
console.log(greet("Erica", "Brooke"));
console.log(greet("ISABELLA"));
console.log(greet("Abigail","Brian","Charlie","Daniel","Emma"));


