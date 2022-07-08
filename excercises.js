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

//Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the
//number of sheep present in the array (true means present).

function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter(Boolean).length;
}

//Write function bmi that calculates body mass index (bmi = weight / height2).

function bmi(weight, height) {
    let bmi = weight / (height * height);

    if (bmi <= 18.5) {
        return "Underweight";
    } else if (bmi <= 25.0) {
        return "Normal";
    } else if (bmi <= 30.0) {
        return "Overweight";
    } else return "Obese";
}

//otra forma

const bmi = (w, h, bmi = w / h / h) =>
    bmi <= 18.5 ?
    "Underweight" :
    bmi <= 25 ?
    "Normal" :
    bmi <= 30 ?
    "Overweight" :
    "Obese";

/*Given a non-empty array of integers, return the result of multiplying the values together in order. 
Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24 */

function grow(x) {
    let total = 1;
    for (let i = 0; i < x.length; i++) {
        total *= x[i];
    }
    return total;
}

// x *= y ---->  x = x * y

//Complete the function which converts a binary number (given as a string) to a decimal number.

function binToDec(bin) {
    return parseInt(bin, 2);
}

/*Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.*/

function reverseWords(str) {
    return str
        .split(" ")
        .map((x) => x.split("").reverse().join(""))
        .join(" ");
}

//otra forma 

function reverseWords(str) {
    let result = "";
    let pop = [];

    for (let palabra of str.split(" ")) {
        for (let i = 0; i < 0 palabra.lenght; i++) {
            result = palabra[i] + result;

        }
        pop.push(result);
        result = "";

    }

    return pop.join(" ");
}