//We need a function that can transform a string into a number.

var stringToNumber = function(str) {
    return parseInt(str);
};

/*Create a function with two arguments that will return an array of +
the first (n) multiples of (x).
Assume both the given number and the number of times to count will be 
positive numbers greater than 0.*/

/*function countBy(x, n) {
    
    const arr = [];
    let resto = x*x

    for (let i = 1;  i <= n ; i++) {
        if (resto == 0) {
            arr.push(resto);
        }
    }
    return arr;
}*/

function countBy(x, n) {
    let arr = [];

    for (let i = 1; i <= n; i++) {
        arr.push(x * i);
    }

    return arr;
}

/*Make a function that will return a greeting statement that uses an input; your program should return, 
"Hello, <name> how are you doing today?".*/

function greet(name) {
    return `Hello, ${name} how are you doing today?`;
}

//const greet = name => `Hello, ${name} how are you doing today?`; */

/*Write a function to split a string and 
convert it into an array of words.*/

function stringToArray(string) {
    return string.split(" ");
}

//const stringToArray = string => string.split(' ');

/*Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow' */

function solution(str) {
    let arr = str.split(""); //tener cuidad con el espacio entre las comillas!
    return arr.reverse().join("");
}

/*Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!*/

function areYouPlayingBanjo(name) {
    if (name.charAt(0) === "R" || name.charAt(0) === "r") {
        return `${name} plays banjo`;
    } else return `${name} does not play banjo`;
}

//Lo probe con startswith() no funciono
//otras posibilidades:

function areYouPlayingBanjo(name) {
    if (name[0] == "R" || name[0] == "r") return name + " plays banjo";
    else return name + " does not play banjo";
}

function areYouPlayingBanjo(name) {
    if (name[0].toLowerCase() === "r") {
        return name + " plays banjo";
    } else {
        return name + " does not play banjo";
    }
}