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
        }b vnvhnjb
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

//You will be given an array a and a value x. All you need to do is check whether the provided 
//array contains the value.

//Array can contain numbers or strings. X can be either
//Return true if the arrai contains the value, false if not.

function check(a, x) {
    console.log(a, x)
    for (let i = 0; i < a.lenght; i++) {
        if (a[i] === x) {
            return true
        }
        return false;
    }
}

//otra forma:

function check(a, x) {
    return a.some(y => y === x)
}

//otra forma:

function check(a, x) {
    return a.includes(x);
};

//o :

const check = (a, x) => a.includes(x);

//Your goal is to determine which phrase the girl would say for a flower of a given number of petals, where nb_petals > 0
// I love you
// a little
//a lot
//passionately
//madly
//not at all

function howMuchIloveYou(nb_Petals) {
    let value = {
        1: "I love you",
        2: "a little",
        3: "a lot",
        4: "passionately",
        5: "madly",
        6: "not at all",
    }

    if (nb_Petals > 6) {
        let modulo = nb_Petals % 6;
        return modulo === 0 ? value[6] : value[modulo]
    }
}

//Given an array of integers, return a new array with each value doubled.

//For example:

//[1, 2, 3] --> [2, 4, 6]


function maps(x) {

    return x.map(x => x * 2);
}

/*------------------------------------------------------------------------------

 In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
makeNegative(1);     return -1
makeNegative(-5);   return -5
makeNegative(0);     return 0
makeNegative(0.12);  return -0.12 */



function makeNegative(num) {
    if (num > 0) {
        return num * (-1);
    } else {
        return (num)
    }

}

//Complete the function which converts hex number (given as a string) to a decimal number.

function hexToDec(hexString) {
    return parseInt(hexString, 16); // el sistema hexadecimal es un sistema de numeracion posicional que tiene como base el 16. Esto quiere decir que utiliza 16 digitos diferentes frente al binario (1 y 0) y frente a los 10 del decimal
}

/*Given an array of integers.
Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65]. */


function countPositivesSumNegatives(input) {
    if (input == null || input.length < 1) {
        return [];
    }

    let array = [0, 0];

    for (i = 0; i < input.length; i++) {

        if (input[i] > 0) {
            array[0] += 1;
        } else {
            array[1] += input[i];
        }
    }
    return array;
}